import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import TitleMiddle from "../components/TitleMiddle";
import TitleSmall from "../components/TitleSmall";
import * as uuid from "uuid/v4";

import stylesTapInput from "./TapInput.module.css";
import stylesUI from "../styles/uiControls.module.css";

function TapInput({ max, tapwedstrijdStore }) {
  let {
    aantalTaps,
    addTap,
    isRunning,
    startTimer,
    getTimeNow,
    timePassed,
    initTaps,
    stopTimer,
    maxTaps,
    resetTimer,
    alreadyPlayed
  } = tapwedstrijdStore;

  useEffect(() => {
    resetTimer();
    return () => {
      resetTimer();
    };
  }, []);

  const discipline = max;

  const Instructie = () => {
    if (aantalTaps === 0) {
      return <p className={stylesTapInput.info}>Tap om te beginnen!</p>;
    } else {
      return "";
    }
  };

  const initTimer = () => {
    if (aantalTaps === 0) {
      addTap();
      initTaps(discipline);
      startTimer();
    } else {
      console.log("clicked");
    }
    setInterval(() => {
      getTimeNow();
    }, 100);
  };

  return (
    <div className={stylesTapInput.containerGrid}>
      <section className={stylesTapInput.content}>
        <TitleMiddle keyValue={uuid()} text="Tapstrijd." />

        <div
          className={stylesTapInput.hitAreaGrid}
          onClick={() => {
            if (isRunning === false) {
              initTimer();
            } else {
              if (aantalTaps < maxTaps) {
                console.log("toevoegen tap");
                addTap();
                if (aantalTaps + 1 === maxTaps) {
                  console.log("max bereikt");
                  isRunning = false;
                  stopTimer();
                }
              }
            }
          }}
        >
          <p className={`${stylesTapInput.passedTime} ${stylesUI.seconds}`}>
            {timePassed} sec
          </p>
          {aantalTaps === 0 ? (
            <Instructie />
          ) : (
            <p className={`stylesTapInput.tapCount ${stylesTapInput.info}`}>
              {aantalTaps}
            </p>
          )}
        </div>

        <div className={stylesTapInput.buttonWrapper}>
          {aantalTaps > 0 ? (
            <button
              onClick={() => {
                console.log("reset clicked");
                resetTimer();
                aantalTaps = 0;
                isRunning = false;
                maxTaps = 0;
              }}
            >
              <Button keyValue={uuid()} color={"secondary"} label={"Opnieuw"} />
            </button>
          ) : (
            ""
          )}

          {alreadyPlayed === true && aantalTaps > 0 && isRunning === false ? (
            <Button
              keyValue={uuid()}
              color={"primary"}
              link={`/tapwedstrijd/resultaat`}
              label={"Delen >"}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default inject(`tapwedstrijdStore`)(observer(TapInput));
