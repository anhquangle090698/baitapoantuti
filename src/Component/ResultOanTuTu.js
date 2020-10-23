import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../css/ResultOanTuTi.module.css";

class ResultOanTuTu extends Component {
  render() {
    return (
      <div className={`${styles.ResultContent}`}>
        <p className="text-warning display-4 text-center mb-5">
          {this.props.ketQua}
        </p>
        <p className="text-success display-4 text-center">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </p>
        <p className="text-success display-4 text-center">
          Số bàn chơi:{" "}
          <span className="text-warning">{this.props.tongSoBanChoi}</span>
        </p>
        <div className="text-center">
          <button
            className="btn btn-success btn-lg"
            onClick={() => {
              this.props.randomChooseComputer();
            }}
          >
            Oẳn Tù Tì
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    randomChooseComputer: () => {
      let i = 0;

      let randomChoose = setInterval(() => {
        const action = {
          type: "RANDOM_CHOOSE",
        };

        dispatch(action);
        i++;

        if (i > 30) {
          clearInterval(randomChoose);

          const action = {
            type: "RESULT_GAME",
          };

          dispatch(action);
        }
      }, 100);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    soBanThang: state.StateOanTuTi.soBanThang,
    tongSoBanChoi: state.StateOanTuTi.tongSoBanChoi,
    ketQua: state.StateOanTuTi.ketQua,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultOanTuTu);
