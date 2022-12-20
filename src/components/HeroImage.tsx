import React from "react";
import { motion } from "framer-motion";
import bigboy from "../assests/img/Rectangle 2834.svg";
import alhaja from "../assests/img/Rectangle 2833.svg";
import amaka from "../assests/img/Rectangle 2832.svg";
// import spiral from "../assests/img/Vector.svg";
import increaseText from "../assests/img/increaseText.svg";
import underline from "../assests/img/underline.svg";
// import chart_1 from "../assests/img/chart_1.svg";
import Arrow from "../assests/img/Arrow_10.svg";
import chart from "../assests/img/glossy.svg";
// import Selling from "../assests/img/selling.svg";

function HeroImage() {
  return (
    <div className=" flex flex-row items-center border border-solid border-green-600 w-full ">
      {/* <img src={Selling} alt="Selling" /> */}
      <div className="mr-1 w-96">
        <img src={bigboy} alt="bigboy" className="mb-3 ml-14  " />
        <img src={alhaja} alt="alhaja" className="" />
      </div>
      <div>
        <div className=" flex flex-row mb-5 w-4/5 ">
          <img src={chart} alt="chart_1" className="w-1/3" />
          <img src={Arrow} alt="spiral" className="w-1/3" />
          <div className=" mt-12 w-1/3 ">
            <img src={increaseText} alt="increaseText" />
            <img src={underline} alt="underline" />
          </div>
        </div>

        <div>
          <motion.div className=" absolute top-0 left-0 w-full h-full mix-blend-saturation bg-black/1 " />
          <img src={amaka} alt="amaka" className="mt-10" />
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
