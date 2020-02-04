import React from "react";
import { inject, observer } from "mobx-react";

import { ROUTES } from "../constants";
import { NavLink } from "react-router-dom";

const OverzichtSupporterslied = ({ supportersliedStore }) => {
  const { audioLayers } = supportersliedStore;
  return (
    <>
      <NavLink to={ROUTES.audioInput}>Voeg toe +</NavLink>
      {console.log(audioLayers)};
      {audioLayers.map(layer => (
        <audio className="audioplayer" src={layer} controls></audio>
      ))}
      {/* <Recorder layer="One"></Recorder>
      <Recorder layer="Two"></Recorder>
      <button onClick={() => console.log("speel alles")}>Play all</button>
      <button onClick={createTrack}>Download hier je supporterslied!</button> */}
    </>
  );
};

export default inject(`supportersliedStore`)(observer(OverzichtSupporterslied));
