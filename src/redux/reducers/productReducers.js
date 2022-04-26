import BUY_ITEM from "../constants/action-types"

const initialState = {
  value: 0,
  categorySelected:""
};

export function buyItemReducer(state = initialState, action) {
  
  switch (action.type) {
    case BUY_ITEM:
      return { ...state, value: state.value + 1 };
    //return { ...state,value:state.value + 1 };
    case "indian":
      return { ...state, categorySelected: action.payload };
    case "chinese":
      return { ...state, categorySelected: action.payload };
    case "italian":
      return { ...state, categorySelected: action.payload };
    default:
      return state;
  }
}

  // export default buyItemReducer;

