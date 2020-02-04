import React from "react";
import { PropTypes, inject, observer } from "mobx-react";

const Recorder = ({ supportersliedStore, layer }) => {
  const {
    createdMediaRecorder,
    audioCurrent,
    addAudioLayer
  } = supportersliedStore;
  const player = React.createRef();
  const options = { mimeType: "audio/webm" };
  let recordedChunks = [];

  const stopRec = () => {
    supportersliedStore.toggleRecording();
    createdMediaRecorder.stop();
  };

  const initiateRec = () => {
    supportersliedStore.toggleRecording();
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(handleSuccess);
  };

  const handleSuccess = stream => {
    let mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.addEventListener("dataavailable", e => {
      if (e.data.size > 0) {
        recordedChunks.push(e.data);
        supportersliedStore.createAudioFile(recordedChunks);
      }
    });
    mediaRecorder.start();
    supportersliedStore.setMediaRecorder(mediaRecorder);
  };

  return (
    <>
      <h1>Neem hier je supporterslied op</h1>

      {supportersliedStore.isRecording === true ? (
        <button onClick={stopRec}>Stop</button>
      ) : (
        <button onClick={initiateRec}>Opnemen</button>
      )}

      {audioCurrent.length > 0 ? (
        <>
          <button onClick={() => addAudioLayer(audioCurrent[0])}>
            Volgende
          </button>
        </>
      ) : (
        <p>Geen opname beschikbaar</p>
      )}
    </>
  );
};

Recorder.propTypes = {
  supportersliedStore: PropTypes.observableObject.isRequired
};

export default inject(`supportersliedStore`)(observer(Recorder));
