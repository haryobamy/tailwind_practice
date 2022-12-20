import React from "react";
import { motion } from "framer-motion";
import groupImage from "../assests/img/groupPeople.svg";

function AnimationFive() {
  return (
    <div className="w-full h-full flex ">
      <div className=" w-full h-full overflow-hidden">
        <div className=" w-full h-full relative ">
          <motion.div className=" absolute top-0 left-0 w-full h-full mix-blend-saturation bg-black/1 " />
          <img
            src={groupImage}
            alt="samoe"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AnimationFive;
