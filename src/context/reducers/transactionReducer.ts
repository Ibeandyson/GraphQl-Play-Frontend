import Store from "../Store";
import { SET_TRANSACTION } from "../actionTypes"

const initial_state = {
  transactions: []
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
}

export const { Provider, useStore, useDispatch } = Store(
  initial_state,
  reducer,
);