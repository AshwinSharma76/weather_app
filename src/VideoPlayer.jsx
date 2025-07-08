import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./App.css";
import DataBox from "./DataBox";
const VideoPlayer = ({ props }) => {
  let [url, updateurl] = useState(
    "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902679/default_t1ibc4.mp4"
  );
  const videoRef = useRef();
  useEffect(() => {
    if (window.innerWidth > 600) {
      if (!props || !props.current || !props.current.condition) {
        updateurl(
          "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902163/default_sdqecm.mp4"
        ); // fallback
      } else {
        const condition = props.current.condition.text.toLowerCase();
        if (condition.includes("mist") || condition.includes("fog")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902179/mist_yvwwbu.mp4"
          );
        } else if (condition.includes("sunny")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751903059/mixkit-luxury-tourist-beach-2903-full-hd_oab3vo.mp4"
          );
        } else if (
          condition.includes("cloud") ||
          condition.includes("overcast")
        ) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902138/cloud_mivhhd.mp4"
          );
        } else if (condition.includes("rain")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751909010/5174040-uhd_2560_1440_30fps_d9ake8.mp4"
          );
        } else if (condition.includes("snow")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902161/snow_yoqo31.mp4"
          );
        } else {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902163/default_sdqecm.mp4"
          );
        }
      }
    } else {
      if (!props || !props.current || !props.current.condition) {
        updateurl(
          "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902679/default_t1ibc4.mp4"
        ); // fallback
      } else {
        const condition = props.current.condition.text.toLowerCase();
        if (condition.includes("mist") || condition.includes("fog")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902672/mist_nnbudi.mp4"
          );
        } else if (condition.includes("sunny")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902675/sunnyDayvideo_oupyd3.mp4"
          );
        } else if (condition.includes("cloud")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902668/cloud_s63xej.mp4"
          );
        } else if (condition.includes("rain")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902652/rain_sx9ige.mp4"
          );
        } else if (condition.includes("snow")) {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902640/snow_mrt6kz.mp4"
          );
        } else {
          updateurl(
            "https://res.cloudinary.com/dmcuezfk6/video/upload/v1751902679/default_t1ibc4.mp4"
          );
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
