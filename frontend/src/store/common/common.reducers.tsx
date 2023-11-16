import { commonType } from "./common.type";

const initialState = {
  loadSpin: 0,
};

export function common(state = initialState, action: any) {
  let loadSpin = 0;
  switch (action.type) {
    case commonType.SPIN.SHOW:
      loadSpin = state.loadSpin + 1;
      return {
        ...state,
        loadSpin: loadSpin,
      };
    case commonType.SPIN.HIDE:
      loadSpin = state.loadSpin - 1;
      loadSpin = loadSpin > 0 ? loadSpin : 0;
      return {
        ...state,
        loadSpin: loadSpin,
      };
    default:
      return state;
  }
}
