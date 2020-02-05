import React from "react";
import { PropTypes, inject, observer } from "mobx-react";

import { ROUTES } from "../constants";
import { Link } from "react-router-dom";

const Recorder = ({ supportersliedStore, layer }) => {
  const {
    createdMediaRecorder,
    audioCurrent,
    addAudioLayer,
    clearAudio,
    merge,
    autoStop,
    resetTimeout,
    timeLeft,
    stopCountdown
  } = supportersliedStore;

  const options = { mimeType: "audio/webm" };
  let recordedChunks = [];

  const stopRec = () => {
    if (supportersliedStore.createdMediaRecorder.state === "recording") {
      clearTimeout(autoStop);
      stopCountdown();
      supportersliedStore.toggleRecording();
      supportersliedStore.createdMediaRecorder.stop();
    }
  };

  const initiateRec = () => {
    resetTimeout(setTimeout(stopRec, 5000));
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

  const inputAudio = React.createRef();

  return (
    <>
      <h1>Neem hier een audiolaag op</h1>

      {audioCurrent.length > 0 ? (
        <>
          {supportersliedStore.isRecording === true ? (
            <>
              <button onClick={stopRec}>Stop</button>
              <p>{timeLeft}</p>
            </>
          ) : (
            <>
              <button onClick={initiateRec}>Opnieuw opnemem</button>
              <Link to={ROUTES.overzichtSupporterslied}>
                <button
                  onClick={() => {
                    addAudioLayer(audioCurrent[0]);
                    clearAudio();
                    merge();
                  }}
                >
                  Laag toevoegen aan compositie
                </button>
              </Link>
              <button
                onClick={() => {
                  inputAudio.current.play();
                }}
              >
                Herbeluister
              </button>
            </>
          )}
          {audioCurrent.map(track => (
            <audio
              className="audioplayer"
              src={track}
              controls
              ref={inputAudio}
              key="currentLayer"
            ></audio>
          ))}
        </>
      ) : (
        <>
          {supportersliedStore.isRecording === true ? (
            <>
              <button onClick={stopRec}>Stop</button>
              <p>{timeLeft}</p>
            </>
          ) : (
            <button onClick={initiateRec}>Opnemen</button>
          )}
        </>
      )}
    </>
  );
};

Recorder.propTypes = {
  supportersliedStore: PropTypes.observableObject.isRequired
};

export default inject(`supportersliedStore`)(observer(Recorder));
