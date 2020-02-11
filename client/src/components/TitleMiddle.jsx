import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import stylesUI from "../styles/uiControls.module.css";

const Outline = ({ text, style }) => {
  return (
    <div className={stylesUI.titleMiddleOutline} style={style}>
      {text}
    </div>
  );
};

class TitleMiddle extends Component {
  titleHeight;

  constructor(props) {
    super(props);
    this.key = props.keyValue;
    this.text = props.text;
    this.titleRef = React.createRef();
    this.state = {
      divStyle: {
        marginTop: "0"
      }
    };
  }

  componentDidMount = () => {
    console.log("key", this.key);
    console.log("ref", this.titleRef.dataset);
    const title = document.querySelector(`.titelEl${this.key}`);
    this.getDimensions();
    window.addEventListener("resize", this.getDimensions);
  };

  getDimensions = () => {
    const title = document.querySelector(`.titelEl${this.key}`);
    this.titleHeight = title.getBoundingClientRect().height;
    this.renderOutlineStyle();
  };

  renderOutlineStyle = () => {
    this.setState({
      divStyle: {
        marginTop: `-${this.titleHeight + 2}px`
      }
    });
    console.log(this.state.divStyle);
  };

  render = () => {
    return (
      <div>
        <h2
          data-key={this.key}
          ref={this.titleRef}
          className={`titelEl${this.key} ${stylesUI.titleMiddleResponsive} middleTitle`}
        >
          {this.text}
        </h2>
        <Outline text={this.text} style={this.state.divStyle} />
      </div>
    );
  };
}

export default TitleMiddle;
