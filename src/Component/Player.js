import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../css/Player.module.css";

class Player extends Component {
  renderOanTuTi = () => {
    return this.props.listOanTuTi.map((ott, index) => {
      let border = {};

      if (ott.id === this.props.youChoose.id) {
        border = { border: "3px solid orange" };
      }
      return (
        <div className={`${styles.imgListChoose}`} style={border} key={index}>
          <img
            src={ott.src}
            width="40px"
            alt={ott.src}
            onClick={() => {
              this.props.clickChoose(ott);
            }}
          ></img>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div className={`${styles.imgYouChoose}`}>
          <img
            src={this.props.youChoose.src}
            style={{ transform: "rotate(20deg)" }}
            width="50px"
            alt="kéo"
          ></img>
        </div>
        <div className="img-avatar">
          <img src="./images/player.png" width="200px" alt="avatar"></img>
        </div>
        <div className="img-listChoose d-flex">{this.renderOanTuTi()};</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listOanTuTi: state.StateOanTuTi.listOanTuTi,
    youChoose: state.StateOanTuTi.youChoose,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickChoose: (ott) => {
      console.log(ott);
      const action = {
        type: "CHOOSE_OAN_TU_TI",
        ott,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
