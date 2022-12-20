import React from "react";
import { motion } from "framer-motion";
import Collection from "../assests/img/main.svg";

function AnimationThree() {
  return (
    <motion.div className="w-full h-full relative overflow-hidden">
      <motion.div
        className=" absolute w-full h-full top-0 left-0 bg-white pointer-events-none  "
        animate={{
          x: "100%",
          transition: {
            duration: 2,
          },
        }}
      />
      <motion.div
        className=" absolute w-full h-full top-0 left-0 bg-white pointer-events-none   "
        initial={{
          x: "-100%",
        }}
        // animate={{ opacity: 1 }}
        exit={{
          x: "0%",
          transition: {
            duration: 0.5,
          },
        }}
      />
      5
      <img src={Collection} alt="firstimage" className="h-full w-full" />
    </motion.div>
  );
}

export default AnimationThree;
