import React from "react";
import AfkickBelofte from "../components/AfkickBelofte";
import VoornemenBelofte from "../components/VoornemenBelofte";

const BelofteContainer = ({ soort }) => {
  // let renderedImageURL = ``;

  // const initiateCanvas = (e, input) => {
  // 	e.preventDefault();
  // 	const canvas = document.getElementById(`canvas`);
  // 	const ctx = canvas.getContext(`2d`);
  // 	ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 	ctx.fillStyle = `#FF0000`;
  // 	ctx.fillRect(0, 0, 80, 80);
  // 	ctx.fillStyle = `#000000`;
  // 	ctx.font = `30px Arial`;
  // 	ctx.fillText(input.current.value, 10, 50);

  // 	const result = document.getElementById(`result`);
  // 	const download = document.getElementById(`download`);

  // 	renderedImageURL = document.getElementById(`canvas`).toDataURL(`image/png`);
  // 	result.setAttribute(`src`, renderedImageURL);
  // 	download.setAttribute(`href`, renderedImageURL);
  // };

  // const download = () => {
  //   const download = document.getElementById(`download`);
  //   var image = document
  //     .getElementById(`canvas`)
  //     .toDataURL(`image/png`)
  //     .replace(`image/png`, `image/octet-stream`);
  //   download.setAttribute(`href`, image);
  //   //download.setAttribute("download","archive.png");
  // };

  if (soort === "afkick") {
    return <AfkickBelofte />;
  } else {
    return <VoornemenBelofte />;
  }
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default BelofteContainer;
