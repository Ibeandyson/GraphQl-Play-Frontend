import { useDispatch } from "../context/reducers/updateCoinReducer"
import { SET_COIN_CODE } from "../context/actionTypes";

const useSetCoin = () => {
    const dispatch = useDispatch();
    const setCoinCode = (val: string) => {
        dispatch({ type: SET_COIN_CODE, payload: val })
    }
    return {
        setCoinCode
    }
}

export default useSetCoin 