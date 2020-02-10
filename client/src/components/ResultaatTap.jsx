import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";

const ResultaatTap = ({ tapwedstrijdStore }) => {
  const { maxTaps, finalTime } = tapwedstrijdStore;

  let renderedImageURL = ``;
  const canvas = React.createRef();
  const result = React.createRef();
  const download = React.createRef();

  useEffect(() => {
    initiateCanvas();
  });

  const initiateCanvas = () => {
    console.log("uitgevoerd!");
    console.log(canvas);

    const ctx = canvas.current.getContext(`2d`);
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.fillStyle = `#FF0000`;
    ctx.fillRect(0, 0, 80, 80);
    ctx.fillStyle = `#000000`;
    ctx.font = `30px Arial`;
    ctx.fillText(`${maxTaps}, ${finalTime}`, 10, 50);

    renderedImageURL = canvas.current.toDataURL(`image/png`);
    result.current.setAttribute(`src`, renderedImageURL);
    download.current.setAttribute(`href`, renderedImageURL);
  };

  return (
    <>
      <section>
        <h1>Tapwedstrijd.</h1>
        <canvas ref={canvas} width={640} height={425}></canvas>

        <img ref={result} src="" alt="resultaat" />

        <a ref={download} download="score.jpg" href="/" title="score">
          download
        </a>
      </section>
    </>
  );
};

export default inject(`tapwedstrijdStore`)(observer(ResultaatTap));
