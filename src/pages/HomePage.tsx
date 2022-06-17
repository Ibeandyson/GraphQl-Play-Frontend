import { FC } from "react";
import { SelectorBox, Logo, ShowCoins } from "../components";
import Img from "../assets/figure.png";

const HomePage: FC = () => {
  return (
    <div>
      <main className="container mx-auto sm: px-[25px]">
        <Logo />
        <div className="pt-16 sm:block  lg:flex lg:justify-between">
          <div>
            <h1 className="text-[40px] text-[#cecfd2] font-bold lg:w-[500px] ">
              Now you can track all your cryptos here!
            </h1>
            <p className="text-[20px] text-[#847297] font-bold pt-7 ">
              Just enetr the cryptocurrency code on the form to the right.
            </p>
            <div className="pt-10">
              <ShowCoins />
            </div>
          </div>
          <div className="sm: hidden  lg:block">
            <img
              src={Img}
              style={{ height: "700px", marginTop: "100px", paddingBottom: "20px", width: "1000px" }}
            />
          </div>
          <div className="mt-[100px] sm: pb-10">
            <SelectorBox />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
