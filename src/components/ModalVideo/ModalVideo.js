import React, { useState, useEffect } from "react";

import ReactPlayer from "react-player";

import { Modal } from "antd";

import "./modalvideo.scss";

function ModalVideo(props) {
  const { videoKey, videoPlatform, isOpen, close } = props;
  const [urlVideo, setUrlVideo] = useState(null);

  // console.log(videoPlatform);
  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
      default:
        break;
    }
  }, [videoKey, videoPlatform]);

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls />
    </Modal>
  );
}

export default ModalVideo;
