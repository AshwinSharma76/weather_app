import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./App.css";
import DataBox from "./DataBox";
const VideoPlayer = ({ props }) => {
  let [url, updateurl] = useState("/videos/default.mp4");
  const videoRef = useRef();
  useEffect(() => {
    if (window.innerWidth > 600) {
      if (!props || !props.current || !props.current.condition) {
        updateurl("/videos/default.mp4"); // fallback
      } else {
        const condition = props.current.condition.text.toLowerCase();
        if (condition.includes("mist") || condition.includes("fog")) {
          updateurl("/videoPc/mist.mp4");
        } else if (condition.includes("sunny")) {
          updateurl("/videoPc/sunny.mp4");
        } else if (
          condition.includes("cloud") ||
          condition.includes("overcast")
        ) {
          updateurl("/videoPc/cloud.mp4");
        } else if (condition.includes("rain")) {
          updateurl("/videoPc/rain.mp4");
        } else if (condition.includes("snow")) {
          updateurl("/videoPc/snow.mp4");
        } else {
          updateurl("/videoPc/default.mp4");
        }
      }
    } else {
      if (!props || !props.current || !props.current.condition) {
        updateurl("/videos/default.mp4"); // fallback
      } else {
        const condition = props.current.condition.text.toLowerCase();
        if (condition.includes("mist") || condition.includes("fog")) {
          updateurl("/videos/mist.mp4");
        } else if (condition.includes("sunny")) {
          updateurl("/videos/sunnyDayvideo.mp4");
        } else if (condition.includes("cloud")) {
          updateurl("/videos/cloud.mp4");
        } else if (condition.includes("rain")) {
          updateurl("/videos/rain.mp4");
        } else if (condition.includes("snow")) {
          updateurl("/videos/snow.mp4");
        } else {
          updateurl("/videos/default.mp4");
        }
      }
    }

    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [props, url]);

  return (
    <>
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
      >
        <source src={url} type="video/mp4" />
      </video>
      <DataBox props={props} />
    </>
  );
};

export default VideoPlayer;
