import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import stylesUI from "../styles/uiControls.module.css";

const Outline = ({ text, style }) => {
  return (
    <div className={stylesUI.titleSmallOutline} style={style}>
      {text}
    </div>
  );
};

class TitleSmall extends Component {
  titleHeight;
  windowWidth;
  windowHeight;

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
    setTimeout(() => {
      this.getDimensions();
    }, 100);
    window.addEventListener("resize", this.getDimensions);
  };

  getDimensions = () => {
    if (this.titleRef) {
      const title = this.titleRef;
      console.log("getdimensions", title);
      this.titleHeight = title.getBoundingClientRect().height;
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.renderOutlineStyle();
    }
  };

  renderOutlineStyle = () => {
    const offsetHorizontal = this.windowWidth * 0.0015;
    const offsetVertical = this.windowHeight * 0.0025;
    this.setState({
      divStyle: {
        marginTop: `-${this.titleHeight + offsetVertical}px`,
        marginLeft: `${offsetHorizontal}px`
      }
    });
  };

  render = () => {
    return (
      <div>
        <p
          ref={e => (this.titleRef = e)}
          className={`titelEl${this.key} ${stylesUI.titleSmallResponsive} smallTitle`}
        >
          {this.text}
        </p>
        <Outline text={this.text} style={this.state.divStyle} />
      </div>
    );
  };
}

export default TitleSmall;
