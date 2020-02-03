import React from "react";
import { PropTypes, inject, observer } from "mobx-react";

const Recorder = ({ supportersliedStore, layer }) => {
  const player = React.createRef();

  const options = { mimeType: "audio/webm" };
  let recordedChunks = [];
  let mediaRecorder;

  const stopRec = () => {
    console.log("op stop geduwd");
    console.log(recordedChunks);
    mediaRecorder.stop();

    console.log("player src ingesteld");
  };

  const handleSuccess = stream => {
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.addEventListener("dataavailable", e => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
        player.current.src = URL.createObjectURL(new Blob(recordedChunks));
        supportersliedStore.layers.push(player.current.src);
      }
    });
    mediaRecorder.start();
  };

  const initiateRec = () => {
    supportersliedStore.startRecording();
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(handleSuccess);
  };

  return (
    <>
      <h1>Maak je Supporterslied</h1>
      <audio className="audioplayer" id={layer} ref={player} controls></audio>
      {supportersliedStore.isRecording === true ? (
        <button onClick={stopRec}>Stop</button>
      ) : (
        <button onClick={initiateRec}>Opnemen</button>
      )}
    </>
  );
};

Recorder.propTypes = {
  supportersliedStore: PropTypes.observableObject.isRequired
};

export default inject(`supportersliedStore`)(observer(Recorder));
