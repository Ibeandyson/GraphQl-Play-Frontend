import { ReactNode, FC } from "react";
import { Provider as CoinProvider } from "../reducers/updateCoinReducer";

interface Props {
  children: ReactNode;
}

const GlobalProvider: FC<Props> = ({ children }) => {
  return <CoinProvider>{children}</CoinProvider>;
};

export default GlobalProvider;
