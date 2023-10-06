import os
import sys
NOW_DIR = os.getcwd()
sys.path.append(NOW_DIR + '/deepsort')


from flask import Flask, request, jsonify, send_file, redirect
import requests 
import json

import boto3
# import opencv
# from scenedetect import open_video, SceneManager
# from scenedetect.detectors import ContentDetector
# from scenedetect.scene_manager import save_images
# from scenedetect.video_splitter import split_video_ffmpeg
# from moviepy.editor import VideoFileClip, concatenate_videoclips, vfx, AudioFileClip, afx
from deepsort import basketball
from moviepy.editor import VideoFileClip, AudioFileClip
from moviepy.editor import *
import torch

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
app = Flask(__name__)


s3 = boto3.client(
    's3',
    # aws_access_key_id=app.config['S3_ACCESS_KEY'],
    # aws_secret_access_key=app.config['S3_SECRET_KEY'],
    aws_access_key_id='AKIATFUDLW4NBSNG2SR7',
    aws_secret_access_key='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',
    # config=Config(signature_version='s3v4')
)


@app.route('/ai')
def test():
    print("test")
    return "test"


bgm_path = "./temp/background_music.mp3"
prev_game_id = ""

def highlight_video(ID, result, video_path):
    global bgm_path



    highlight_duration = 2  # 2초
    clips = []
    
    for player_history in result["playerHistories"]:
        for frame in player_history['goalTime']:
            print(11)
            start_time = max(frame/60 - highlight_duration, 0)
            end_time = min(frame//60 + highlight_duration, 5)

            print("start_time : ", start_time)
            print("end_time : ", end_time)

            # 동영상의 해당 부분 추출
            highlight_clip = VideoFileClip(video_path).subclip(start_time, end_time)
            print(12)

            # 하이라이트 동영상 저장
            output_file = f'highlight_{frame}.mp4'
            print(20)
            highlight_clip.write_videofile(output_file, codec='libx264')
            print(13)

            # 생성된 하이라이트 동영상을 clips 리스트에 추가
            clips.append(VideoFileClip(output_file))
            print(14)

    # 배경 음악 로드
        bgm_clip = AudioFileClip(bgm_path)
        print(15)

        # 하이라이트 동영상들을 연결하여 하나의 동영상으로 만듭니다.
        final_video = concatenate_videoclips(clips)
        print(16)

        # 배경 음악 추가
        final_video = final_video.set_audio(bgm_clip)
        print(17)
        # filename = secure_filename(final_video.filename)
        output_path = f"./temp/{ID}.mp4"
        # 하나의 동영상으로 합친 후 저장
        print(18)
        final_video.write_videofile(output_path, codec='libx264')
        print(19)
        bucket_name = "dongddonong"
        object_name = f'{ID}.mp4'
        region_name = 'ap-northeast-2'
        s3.put_object(Bucket=bucket_name, Key=object_name)
        print(20)
        local_file_path = 'output_path'
        s3.upload_file(output_path, bucket_name, object_name)
        print(21)
        highlight_url = f'https://{bucket_name}.s3.{region_name}.amazonaws.com/{object_name}'
        player_history["highlightUrl"] = highlight_url
        print(22)
    return result


# @app.route('/ai/analysis/<int:ID>', methods=['POST'])
# def analyze_video(ID):
@app.route('/ai/analysis/<file_name>', methods=['POST'])
def analyze_video(file_name):
    spring_url = 'https://j9e103.p.ssafy.io:8589/game'

    ID = file_name.split('_')[0]

    global prev_game_id
    if prev_game_id!=ID:
        prev_game_id = ID
        try:

            print("analysis")

            bucket_name = "dongddonong"
            object_key = "video/" + file_name
            video_path = f"./temp/{file_name}"
            s3.download_file(bucket_name, object_key, video_path)
            

            video_data = open(video_path, 'r', encoding='UTF-8')
            result = basketball.detect(video_data, ID)
            print("result : ", result)

            # for player_history in result["playerHistories"]:
            #     if "goalTime" in player_history:
            #         goalTime = player_history["goalTime"]
            #         print("goalTime : ", goalTime)
            #         여기에 하이라이트 함수 넣으면 됨
            #         # highlight_video(goalTime, video_data)
            # 주석 해제 해야함
            result = highlight_video(ID, result, video_path)
            

            # goalTile 지우기
            for player_history in result["playerHistories"]:
                del player_history["goalTime"]

            # print("json.dumps(result) : ", json.dumps(result))

            print(result)
            # highlight = highlight_video(result, video_data)
            print("spring_url : ", spring_url)
            try:
                headers = {'Content-type': 'application/json; charset=utf-8'}
                response = requests.patch(spring_url, headers=headers, data=json.dumps(result))

                if response.ok:
                    try:
                        result = response.json()
                        print("Analysis Result:", result['result'])
                    except json.JSONDecodeError as json_error:
                        print("Error decoding JSON response:", json_error)
                else:
                    print("Error:", response.status_code, response.text)

            except requests.exceptions.RequestException as request_error:
                print("Request error:", request_error)
            except Exception as e:
                print("Error:", e)

            return jsonify({'result': result}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'result': "이미 등록되어있음"}), 200
