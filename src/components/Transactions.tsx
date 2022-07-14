import { FC,} from 'react';
import useTransaction from '../hooks/useTransaction ';

const Transactions: FC = () => {
  const { transactionsData } = useTransaction();
  return (
    <div className="content-center">
      {transactionsData?.map((data: any) => (
        <div key={data.id} className="block">
          <div className="card bg-base-100 shadow-xl mt-[30px] ">
            <div className="card-body p-[20px] ">
              <h1 className="text-lg font-bold">{data.created_at}</h1>
              <div>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.TransactGroups.map((data: any) => (
                        <tr key={data.id}>
                          <th>{data.id}</th>
                          <td>{data.name}</td>
                          <td>{data.status}</td>
                          <td>{data.type}</td>
                          <td>{data.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
