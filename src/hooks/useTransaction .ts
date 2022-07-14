import { useQuery, } from "@apollo/client"
import { GET_TRANSACTION } from "../graphql/qurey";
import { useDispatch, useStore } from "../context/reducers/transactionReducer"
import { SET_TRANSACTION } from "../context/actionTypes";


const useTransaction = () => {
    const store = useStore();
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_TRANSACTION, { fetchPolicy: 'network-only', })

    const getTransactions = () => {
        if (store.transactions?.length < 1 && data !== undefined) {
            dispatch({ type: SET_TRANSACTION, payload: data.allTransactions })
        }
    }
    const reSetFilterTransactions = () => {
        dispatch({ type: SET_TRANSACTION, payload: data.allTransactions })
    }

    const filterTransactionsByType = (filter: string) => {
        let filteredData = store.transactions.map((element: any) => {
            return { ...element, TransactGroups: element.TransactGroups.filter((subElement: any) => subElement.type === filter) }
        })
        dispatch({ type: SET_TRANSACTION, payload: filteredData })
    }
    const filterTransactionsByStatus = (filter: string) => {
        let filteredData = store.transactions.map((element: any) => {
            return { ...element, TransactGroups: element.TransactGroups.filter((subElement: any) => subElement.status === filter) }
        })
        dispatch({ type: SET_TRANSACTION, payload: filteredData })
    }

    const searchTransactionsByname = (filter: string) => {
        let filteredData = store.transactions.map((element: any) => {
            return { ...element, TransactGroups: element.TransactGroups.filter((subElement: any) => subElement.name === filter) }
        })
        dispatch({ type: SET_TRANSACTION, payload: filteredData })
    }
    return {
        loadingState: loading,
        errorState: error,
        transactionsData: store.transactions,
        getTransactions,
        filterTransactionsByType,
        reSetFilterTransactions,
        filterTransactionsByStatus,
        searchTransactionsByname
    }

}

export default useTransaction


