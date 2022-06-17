import { useQuery, } from "@apollo/client"
import { PRICE_RATES } from "../graphql/qurey";
import { useDispatch, useStore } from "../context/reducers/updateCoinReducer"
import { SET_COIN_PRICE } from "../context/actionTypes";


const useGetPrice = () => {
    const store = useStore();
    const dispatch = useDispatch();
    let coinCode = store.coinCode
    let coinPrices = store.coinPrice
    const { loading, error, data, refetch } = useQuery(PRICE_RATES, {
        variables: { coinCode },
    });

    const setPrice = () => {
        let coinsData = []
        refetch({ coinCode })
        if (data !== undefined || null) {
            let obj = data
            obj['code'] = coinCode;
            coinsData.push(obj)
            const val = coinsData.concat(coinPrices)
            dispatch({ type: SET_COIN_PRICE, payload: val })
        }
    }

    const removeCoin = (val: string) => {
        const newArr = coinPrices.filter((object: any) => {
            return object.markets[0].id !== val
        });
        dispatch({ type: SET_COIN_PRICE, payload: newArr })
        console.log(newArr)
    }

    return {
        loadingState: loading,
        errorState: error,
        priceData: store.coinPrice,
        setPrice,
        removeCoin
    }

}

export default useGetPrice