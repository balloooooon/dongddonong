import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

import video from "../../assets/1266.mp4";
import Toast from "../../components/Modal/Toast";
import share from "../../assets/icon/share.png";
import styles from "./HightLight.module.css";

const HighLight = (props) => {
  console.log(props);
  const [toastOpen, SetToastOpen] = useState(false);
  // const [videoURL, SetVideoURL] = useState("");
  // const videoRef = useRef();

  const ToastCloseHandler = () => {
    SetToastOpen(false);
  };

  // useEffect(() => {
  //   SetVideoURL(videoRef.current.props.url);
  // }, [videoRef]);

  return (
    <div className="relative rounded-3xl">
      <img
        className="absolute w-8 right-1 top-1 z-10 cursor-pointer"
        src={share}
        alt="share"
        onClick={() => {
          window.navigator.clipboard.writeText(props.videoURL);
          SetToastOpen(true);

          setTimeout(() => {
            SetToastOpen(false);
          }, 2000);
        }}
      />
      <ReactPlayer
        // "https://dongddonong.s3.ap-northeast-2.amazonaws.com/1266.mp4"
        // url="https://www.youtube.com/embed/Ze306gxl-g4"
        url={video}
        controls
        // ref={videoRef}
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover", minWidth: "300px" }}
      ></ReactPlayer>

      <Toast toastOpen={toastOpen}>링크를 클립보드에 복사했습니다.</Toast>
    </div>
  );
};

export default HighLight;
