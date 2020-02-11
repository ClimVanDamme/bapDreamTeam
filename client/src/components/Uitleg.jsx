import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "./Button";
import Title from "./Title";
import * as uuid from "uuid/v4";
import TitleMiddle from "../components/TitleMiddle";

import styleUitleg from "./Uitleg.module.css";
import styleUI from "../styles/uiControls.module.css";

const Uitleg = ({ path, titel, uitleg, buttons }) => {
  console.log("in uitleg");
  console.log(titel);
  console.log(buttons);
  console.log("in de uitleg comp");
  return (
    <div className={styleUitleg.containerGrid}>
      <section className={styleUitleg.content}>
        <TitleMiddle keyValue={uuid()} text="Supporterslied." />
        {/* <img
				className={styleUitleg.challengeImg}
				src={`./assets/img/${titel}@2x.png`}
				alt={`${titel} foto`}
			/> */}
        <div className={styleUI.tussenTitelCont}>
          <h2 className={styleUI.visuallyHidden}>Hoe werkt het?</h2>
        </div>
        <p>{uitleg}</p>
        <div>
          <ul className={styleUitleg.selectionContainer}>
            {buttons.map((button, index) => {
              return (
                <li
                  className={`styleUitleg.btnCont styleUitleg.button${index}`}
                  key={index}
                >
                  <img
                    className={styleUitleg.btnImg}
                    src={`./assets/img/${button.img}.png`}
                    alt=""
                    width="72"
                    height="72"
                  />
                  <div className={styleUitleg.btnCenter}>
                    <Button
                      keyValue={uuid()}
                      label={button.label}
                      color={"primary"}
                      link={`${path}/${button.path}`}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

// Sporza.propTypes = {
//   sporzaStore: PropTypes.observableObject.isRequired
// };

export default Uitleg;
