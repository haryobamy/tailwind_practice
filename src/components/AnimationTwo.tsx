import React from "react";
import { motion } from "framer-motion";
import image1 from "../assests/img/collections.svg";

function AnimationTwo() {
  return (
    <motion.div className="w-full h-full relative overflow-hidden">
      <motion.div
        className=" absolute w-full h-full top-0 left-0 bg-white pointer-events-none "
        initial={{
          y: 0,
        }}
        animate={{
          y: "100%",
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
      />
      <motion.div
        className=" absolute w-full h-full top-0 left-0 bg-white pointer-events-none  "
        initial={{
          y: "-200%",
        }}
        // animate={{ opacity: 1 }}
        exit={{
          y: "0%",
          transition: {
            duration: 2,
          },
        }}
      />
      <img src={image1} alt="firstimage" className="h-full w-full" />
    </motion.div>
  );
}

export default AnimationTwo;
