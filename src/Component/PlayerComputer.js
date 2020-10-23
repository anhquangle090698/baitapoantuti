import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../css/Computer.module.css";

class PlayerComputer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0%   {top: -50px;}
      25%  {top: 100px;}
      50%  {top: -50px;}
      75%  {top: 100px;}
      100% {top: 0px;}
    }`;

    return (
      <>
        <div className={`${styles.imgComputerChoose}`}>
          <style>{keyframe}</style>
          <img
            src={this.props.computerChoose}
            style={{
              position: "absolute",
              left: "30%",
              top: "30%",
              animation: `randomItem${Date.now()} 0.3s`,
              transform: "rotate(120deg)",
            }}
            width="50px"
            alt="kéo"
          ></img>
        </div>
        <div className="img-avatar">
          <img
            src="./images/playerComputer.png"
            width="200px"
            alt="avatar"
          ></img>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computerChoose: state.StateOanTuTi.computerChoose.src,
  };
};

export default connect(mapStateToProps, null)(PlayerComputer);
