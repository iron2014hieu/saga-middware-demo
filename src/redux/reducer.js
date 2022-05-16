import { types } from "./actions";
const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE_SUCCESS :
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    case types.RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
export default reducer;
