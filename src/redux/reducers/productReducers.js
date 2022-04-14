import BUY_ITEM from "../constants/action-types"

   export const buyItemReducer = (state = "", action) => {
     console.log(action.payload);
    switch (action.type) {
      case BUY_ITEM:
        return { ...state,...(action.payload) };
      default:
        return state;
    }
  };

  