import { FC } from "react";
import LIST_OF_COINS from "../helper/coinList";
import useSetCoin from "../hooks/useSetCoin";
import useGetPrice from "../hooks/useGetPrice";

const SelectorBox: FC = () => {
  const { setCoinCode } = useSetCoin();
  const { setPrice } = useGetPrice();
  return (
    <div className="selector__bg">
      <div className="card lg:w-[500px] bg-base-100 shadow-xl h-[350px] ">
        <div className="card-body ">
          <div className="card-actions mt-8 justify-center">
            <select
              onChange={(e) => setCoinCode(e.target.value)}
              defaultValue="CYPTO CURRENCY CODE"
              className="select w-full max-w-xs border-[#fd4b23] "
            >
              <option disabled>CYPTO CURRENCY CODE</option>
              {LIST_OF_COINS.map((data) => (
                <option key={data.id} value={data.code}>
                  {data.code}
                </option>
              ))}
            </select>
            <button
              onClick={setPrice}
              className="btn bg-[#fd4b23] mt-8 mb-10 w-full max-w-xs  border-0"
            >
              Add
            </button>
            <p className="text-center font-bold text-lg	 text-[#cecfd2]">
              Use of the service is subject to tearms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorBox;
