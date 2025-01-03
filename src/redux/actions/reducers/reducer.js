/* eslint-disable no-mixed-operators */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemindex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.carts[itemindex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "RMV_ONE":
      const itemindex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemindex_dec].qnty >= 1) {
        const dltitem = (state.carts[itemindex_dec].qnty -= 1);
        console.log(...state.carts, dltitem);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemindex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
