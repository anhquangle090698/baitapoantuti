import React, { Component } from "react";
import styles from "../css/BaiTapOanTuTi.module.css";
import Player from "./Player";
import PlayerComputer from "./PlayerComputer";
import ResultOanTuTu from "./ResultOanTuTu";

export default class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className={`${styles.fontGame} ${styles.bgOanTuTi} pt-3`}>
        <div className={`${styles.OanTuTiContent}`}>
          <div className={`${styles.rowFix} row`}>
            <div className="col-md-2">
              <Player></Player>
            </div>
            <div className="col-md-8">
              <ResultOanTuTu></ResultOanTuTu>
            </div>
            <div className="col-md-2">
              <PlayerComputer></PlayerComputer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
