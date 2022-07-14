import { ReactNode, FC } from 'react';
import { Provider as TransactionProvider } from '../reducers/transactionReducer';

interface Props {
  children: ReactNode;
}

const GlobalProvider: FC<Props> = ({ children }) => {
  return <TransactionProvider>{children}</TransactionProvider>;
};

export default GlobalProvider;
