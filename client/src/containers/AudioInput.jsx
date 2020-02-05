import React from "react";
import Recorder from "../components/Recorder";
import { inject, observer } from "mobx-react";

import { ROUTES } from "../constants";
import { Link } from "react-router-dom";

const AudioInput = ({ supportersliedStore }) => {
  const { clearAudio } = supportersliedStore;
  return (
    <>
      <Link to={ROUTES.overzichtSupporterslied}>
        <button onClick={() => clearAudio()}>Terug naar compositie</button>
      </Link>
      <Recorder layer="One"></Recorder>
    </>
  );
};

export default inject(`supportersliedStore`)(observer(AudioInput));
