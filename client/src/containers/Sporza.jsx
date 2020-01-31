import React from "react";
import { inject, observer, PropTypes } from "mobx-react";

const Sporza = ({ sporzaStore }) => {
  const textInput = React.createRef();
  let renderedImageURL = ``;

  const initiateCanvas = e => {
    e.preventDefault();
    const canvas = document.getElementById(`canvas`);
    const ctx = canvas.getContext(`2d`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `#FF0000`;
    ctx.fillRect(0, 0, 80, 80);
    ctx.fillStyle = `#000000`;
    ctx.font = `30px Arial`;
    ctx.fillText(textInput.current.value, 10, 50);

    const result = document.getElementById(`result`);
    const download = document.getElementById(`download`);

    renderedImageURL = document.getElementById(`canvas`).toDataURL(`image/png`);
    result.setAttribute(`src`, renderedImageURL);
    download.setAttribute(`href`, renderedImageURL);
  };

  // const download = () => {
  //   const download = document.getElementById(`download`);
  //   var image = document
  //     .getElementById(`canvas`)
  //     .toDataURL(`image/png`)
  //     .replace(`image/png`, `image/octet-stream`);
  //   download.setAttribute(`href`, image);
  //   //download.setAttribute("download","archive.png");
  // };

  return (
    <>
      <section>
        <h1>Welkom op Sporza.</h1>
        <form onSubmit={initiateCanvas}>
          <label htmlFor="email">
            Supportificaat
            <input ref={textInput} type="text" name="text" id="text=" />
          </label>
          <input type="submit" value="Onderteken" />
        </form>
        <canvas id="canvas" width={640} height={425}>
          Wow cool canvas joh
        </canvas>

        <img id="result" src="" alt="certificate" />

        <a id="download" download="certificaat.jpg" href="" title="certificaat">
          download je certificaat
        </a>
      </section>
    </>
  );
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default inject(`sporzaStore`)(observer(Sporza));
