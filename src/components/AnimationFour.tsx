import React from "react";
import { motion } from "framer-motion";
import market from "../assests/img/marketGirl.svg";
import card from "../assests/img/maketCard.svg";

function AnimationFour() {
  return (
    <motion.div className=" h-full w-full  relative overflow-hidden flex items-center  ">
      <motion.div
        // initial={{
        //   x: "100%",
        // }}
        // animate={{
        //   x: "0%",
        //   transition: {
        //     duration: 3,
        //   },
        // }}
        className="w-[80%] h-[70%] ml-auto  relative rounded-3xl overflow-hidden flex "
      >
        <motion.div
          className=" absolute w-full h-full top-0 left-0  bg-white pointer-events-none   "
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
            transition: {
              duration: 2,
            },
          }}
          exit={{
            x: 0,
            transition: {
              duration: 0.5,
            },
          }}
        />

        <img
          src={market}
          alt="marketWoman"
          className=" object-cover w-full h-full   "
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "100%",
        }}
        animate={{
          opacity: 1,
          y: "0%",
          transition: {
            duration: 3,
          },
        }}
        exit={{
          y: "100%",
          transition: {
            duration: 0.5,
          },
        }}
        className="absolute bottom-0 left-0 w-[75%]   overflow-hidden pointer-events-none"
      >
        {/* <motion.div
          initial={{
            y: "-100%",
          }}
          exit={{
            y: 0,
            transition: {
              duration: 2,
            },
          }}
          className=" relative top-0 left-0 bg-white w-full h-full "
        /> */}

        <img src={card} alt="marketCard" className="  w-full h-full " />
      </motion.div>
    </motion.div>
  );
}

export default AnimationFour;
