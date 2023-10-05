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
# from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
# from moviepy.editor import VideoFileClip, AudioFileClip
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


# @app.route('/ai/analysis/<int:ID>', methods=['POST'])
# def analyze_video(ID):
@app.route('/ai/analysis/<file_name>', methods=['POST'])
def analyze_video(file_name):
    spring_url = 'https://j9e103.p.ssafy.io:8589/game'
    try:

        print("analysis")

        bucket_name = "dongddonong"
        object_key = "video/" + file_name
        video_path = f"./temp/{file_name}"
        s3.download_file(bucket_name, object_key, video_path)
        ID = file_name.split('_')[0]

        video_data = open(video_path, 'r', encoding='UTF-8')
        result = basketball.detect(video_data, ID)
        print("result : ", result)

        for player_history in result["playerHistories"]:
            if "goalTime" in player_history:
                goalTime = player_history["goalTime"]
                print("goalTime : ", goalTime)
                # 여기에 하이라이트 함수 넣으면 됨
                # highlight_video(goalTime, video_data)

        # goalTile 지우기
        for player_history in result["playerHistories"]:
            del player_history["goalTime"]

        print("json.dumps(result) : ", json.dumps(result))


        # highlight = highlight_video(result, video_data)
        try:
            response = requests.patch(spring_url, json.dumps(result))

            if response.status_code == 200:
                result = response.json()
                print("Analysis Result:", result['result'])
            else:
                print("Error:", response.status_code, response.text)

        except Exception as e:
            print("Error:", str(e))

        return jsonify({'result': result}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
