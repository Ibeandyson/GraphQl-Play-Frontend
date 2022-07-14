import { FC, useState } from 'react';
import useTransaction from '../hooks/useTransaction ';

const Filter: FC = () => {
  const { filterTransactionsByType, reSetFilterTransactions, filterTransactionsByStatus, searchTransactionsByname } =
    useTransaction();
  const [searchData, setSearchData] = useState('');
  const onHandleChange = (e: any) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="navbar bg-base-300 rounded-box  ">
      <div className="flex-1 px-2 lg:flex-none">
        <input
          onFocus={reSetFilterTransactions}
          value={searchData}
          onChange={(e) => onHandleChange(e)}
          type="text"
          placeholder="name"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={() => searchTransactionsByname(searchData.charAt(0).toUpperCase() + searchData.slice(1))}
          className="btn ml-[10px] btn-active"
        >
          Search
        </button>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a onClick={reSetFilterTransactions} className="btn btn-ghost rounded-btn">
            Reset Filter
          </a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Type Filter
            </label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li>
                <a onClick={() => filterTransactionsByType('credit')}>credit</a>
              </li>
              <li>
                <a onClick={() => filterTransactionsByType('debit')}>Debit</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Stauts Filter
            </label>
            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li>
                <a onClick={() => filterTransactionsByStatus('failed')}>Failed</a>
              </li>
              <li>
                <a onClick={() => filterTransactionsByStatus('successful')}>Successful</a>
              </li>
              <li>
                <a onClick={() => filterTransactionsByStatus('pending')}>Pending</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
