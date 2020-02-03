import React from "react";
import Recorder from "../components/Recorder";
import { inject, observer } from "mobx-react";

const AudioInput = ({ supportersliedStore }) => {
  return (
    <>
      <Recorder layer="One"></Recorder>
    </>
  );
};

export default inject(`supportersliedStore`)(observer(AudioInput));
