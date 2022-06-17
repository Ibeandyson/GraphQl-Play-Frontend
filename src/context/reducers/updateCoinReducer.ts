import Store from "../Store";
import { SET_COIN_PRICE, SET_COIN_CODE, } from "../actionTypes"

const initial_state = {
    coinCode: "",
    coinPrice: [],
    coinCodeData: []
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case SET_COIN_CODE:
            return {
                ...state,
                coinCode: action.payload,
            };
        case SET_COIN_PRICE:
            return {
                ...state,
                coinPrice: action.payload,
            };
        default:
            return state;
    }
}

export const { Provider, useStore, useDispatch } = Store(
    initial_state,
    reducer,
);