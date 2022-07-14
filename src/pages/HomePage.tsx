import { FC, useEffect } from 'react';
import { Transactions, Filter } from '../components';
import useTransaction from '../hooks/useTransaction ';

const HomePage: FC = () => {
  const { getTransactions, transactionsData } = useTransaction();
  useEffect(() => {
    getTransactions();
  });
  return (
    <div>
      <main className="container mx-auto sm: px-[25px]">
        <div className="pt-5">
          <div className="mt-[100px] sm: pb-10">
            <Filter/>
            <Transactions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
