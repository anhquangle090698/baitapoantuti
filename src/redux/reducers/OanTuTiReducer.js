const stateInit = {
  computerChoose: {
    id: "keo",
    src: "./images/keo.png",
  },
  youChoose: {
    id: "keo",
    src: "./images/keo.png",
  },
  listOanTuTi: [
    { id: "keo", src: "./images/keo.png" },
    { id: "bua", src: "./images/bua.png" },
    { id: "bao", src: "./images/bao.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
  ketQua: `I'm iron man, i love you 3000 !!`,
};

const OanTuTiReducer = (state = stateInit, action) => {
  switch (action.type) {
    case "CHOOSE_OAN_TU_TI": {
      let ottUpdate = state.listOanTuTi.find((lott, index) => {
        return lott.id === action.ott.id;
      });

      //Set state youChoose
      state.youChoose = ottUpdate;
      return { ...state };
    }

    case "RANDOM_CHOOSE": {
      let randomNumber = Math.floor(Math.random() * 3); //  số random từ 0 -> 2

      let ottUpdate = state.listOanTuTi[randomNumber];

      //Set state computerChoose
      state.computerChoose = ottUpdate;
      return { ...state };
    }

    case "RESULT_GAME": {
      let { youChoose, computerChoose } = state;

      //Handle game play oẳn tù tì
      //Set state lại ketQua, soBanThang, tongSoBanChoi
      if (youChoose.id === computerChoose.id) {
        state.ketQua = `Iron Man draw Thanos!!`;
      } else if (youChoose.id === "keo" && computerChoose.id === "bua") {
        state.ketQua = "Iron Man lose, Thanos win!";
      } else if (youChoose.id === "keo" && computerChoose.id === "bao") {
        state.ketQua = "Iron Man win, Thanos lose!";
        state.soBanThang += 1;
      } else if (youChoose.id === "bua" && computerChoose.id === "keo") {
        state.ketQua = "Iron Man win, Thanos lose!";
        state.soBanThang += 1;
      } else if (youChoose.id === "bua" && computerChoose.id === "bao") {
        state.ketQua = "Iron Man lose, Thanos win!";
      } else if (youChoose.id === "bao" && computerChoose.id === "keo") {
        state.ketQua = "Iron Man lose, Thanos win!";
      } else if (youChoose.id === "bao" && computerChoose.id === "bua") {
        state.ketQua = "Iron Man win, Thanos lose!";
        state.soBanThang += 1;
      }

      state.tongSoBanChoi += 1;

      return { ...state };
    }

    default:
      return state;
  }
};

export default OanTuTiReducer;
