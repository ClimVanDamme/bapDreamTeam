import React from "react";
import Recorder from "../components/Recorder";
import { inject, observer } from "mobx-react";

const AudioInput = ({ supportersliedStore }) => {
  const { audioCurrent } = supportersliedStore;
  return (
    <>
      <Recorder layer="One"></Recorder>
      {audioCurrent.map(track => (
        <audio className="audioplayer" src={track} controls></audio>
      ))}
    </>
  );
};

export default inject(`supportersliedStore`)(observer(AudioInput));
