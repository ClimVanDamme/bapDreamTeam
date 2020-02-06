import React from "react";
import { inject, observer } from "mobx-react";

const AfkickBelofte = ({ initiate, belofteStore }) => {
  const textInputOne = React.createRef();
  const textInputTwo = React.createRef();
  const textInputThree = React.createRef();
  const textInputFour = React.createRef();

  const { checkVal, errorText } = belofteStore;
  let renderedImageURL = ``;

  const initiateCanvas = e => {
    e.preventDefault();
    //appendTextInputs([textInputOne, textInputTwo, textInputThree, textInputFour]);
    const canvas = document.getElementById(`canvas`);
    const ctx = canvas.getContext(`2d`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `#FF0000`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `#000000`;
    ctx.font = `condensed 18px Roboto`;

    const str = `Tijdens de Olympische Spelen van Tokio 2020 beloof ik ${textInputOne.current.value} plechtig dat ik twee weken niet ga ${textInputTwo.current.value} \nOok zal ik Team Belgium steunen doorheen deze tijd. \nHierbij controleert ${textInputThree.current.value} mij en moet ik ${textInputFour.current.value} wanneer ik mij niet hou aan deze belofte.`;
    const a = 40;
    const b = 150;
    const lineheight = 30;
    const lines = str.split("\n");

    for (let j = 0; j < lines.length; j++)
      ctx.fillText(lines[j], a, b + j * lineheight);

    const result = document.getElementById(`result`);
    const download = document.getElementById(`download`);

    renderedImageURL = document.getElementById(`canvas`).toDataURL(`image/png`);
    result.setAttribute(`src`, renderedImageURL);
    download.setAttribute(`href`, renderedImageURL);
  };

  if (errorText != "") {
    return (
      <>
        <section>
          <h1>Welkom op Sporza.</h1>
          <form onSubmit={initiateCanvas}>
            <div>
              <p>Tijdens de Olympische Spelen van Tokio 2020 beloof ik </p>
              <input
                onChange={() => {
                  checkVal(textInputOne);
                }}
                ref={textInputOne}
                type="text"
                id="1"
              />
              <p> plechtig dat ik twee weken niet ga</p>
              <input
                onChange={() => {
                  checkVal(textInputTwo);
                }}
                ref={textInputTwo}
                type="text"
                id="2"
              />
              <p>
                Ook zal ik Team Belgium steunen doorheen deze tijd. Hierbij
                controleert
              </p>
              <input
                onChange={() => {
                  checkVal(textInputThree);
                }}
                ref={textInputThree}
                type="text"
                id="3"
              />
              <p>mij en moet ik</p>
              <input
                onChange={() => {
                  checkVal(textInputFour);
                }}
                ref={textInputFour}
                type="text"
                id="4"
              />
              <p>wanneer ik mij niet hou aan deze belofte.</p>
            </div>
          </form>
          <p>{errorText}</p>
          <canvas id="canvas" width={800} height={500}></canvas>

          <img id="result" src="" alt="certificate" />

          <a
            id="download"
            download="certificaat.jpg"
            href="/"
            title="certificaat"
          >
            download je certificaat
          </a>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h1>Welkom op Sporza.</h1>
        <form onSubmit={initiateCanvas}>
          <div>
            <p>Tijdens de Olympische Spelen van Tokio 2020 beloof ik </p>
            <input
              onChange={() => {
                checkVal(textInputOne);
              }}
              ref={textInputOne}
              type="text"
              id="1"
            />
            <p> plechtig dat ik twee weken niet ga</p>
            <input
              onChange={() => {
                checkVal(textInputTwo);
              }}
              ref={textInputTwo}
              type="text"
              id="2"
            />
            <p>
              Ook zal ik Team Belgium steunen doorheen deze tijd. Hierbij
              controleert
            </p>
            <input
              onChange={() => {
                checkVal(textInputThree);
              }}
              ref={textInputThree}
              type="text"
              id="3"
            />
            <p>mij en moet ik</p>
            <input
              onChange={() => {
                checkVal(textInputFour);
              }}
              ref={textInputFour}
              type="text"
              id="4"
            />
            <p>wanneer ik mij niet hou aan deze belofte.</p>
          </div>

          <input type="submit" value="Onderteken" />
        </form>
        <canvas id="canvas" width={800} height={500}></canvas>

        <img id="result" src="" alt="certificate" />

        <a
          id="download"
          download="certificaat.jpg"
          href="/"
          title="certificaat"
        >
          download je certificaat
        </a>
      </section>
    </>
  );
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default inject(`belofteStore`)(observer(AfkickBelofte));
