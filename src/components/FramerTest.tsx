import React, { useEffect, useState } from "react";
import Typewriter from "react-ts-typewriter";
import "./style.css";
import { AnimatePresence } from "framer-motion";

// import illustration from "../assests/img/illustration-intro.svg";
// import image1 from "../assests/img/collections.svg";
// import graph from "../assests/img/graph.svg";
// import Selling from "../assests/img/selling.svg";
// import Collection from "../assests/img/main.svg";
import AnimationOne from "./AnimationOne";
import AnimationTwo from "./AnimationTwo";
import AnimationThree from "./AnimationThree";
import AnimationFour from "./AnimationFour";
// import Animations from "./Animations";
// import RenderIf from "./RenderIf";
// import AnimationFive from "./AnimationFive";
// import HeroImage from "./HeroImage";
// import Animations from "./Animations";

const images = [
  {
    id: 0,
    // image: graph,
    animation: <AnimationOne />,
    style: "framer_image",
  },
  {
    id: 1,
    // image: image1,
    animation: <AnimationTwo />,
    style: "framer_image1",
  },
  {
    id: 2,
    // image: Selling,
    animation: <AnimationFour />,

    style: "framer_image2",
  },
  {
    id: 3,
    // image: Collection, //graph
    animation: <AnimationThree />,
    style: "framer_image2",
  },
  // {
  //   id: 4,
  //   animation: <HeroImage />,
  //   style: "framer",
  // },
];

function FramerTest() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const length = images?.length;
    setTimeout(() => {
      setCurrentIndex((current) => (current === length - 1 ? 0 : current + 1));
    }, 10000);
  }, [currentIndex]);

  useEffect(() => {
    // setCurrentIndex(3);
  }, []);

  return (
    <section className="container flex flex-col-reverse md:flex-row items-center justify-between  px-6 mx-auto mt-10 space-y-0 md:space-y-0  w-full h-screen ">
      {/* left section */}
      <div className=" flex flex-col items-start justify-between w-2/5 mt-10 ">
        <div className="mb-40 ">
          <h4 className=" text-2xl font-semibold ">Seamless</h4>
          <h2 className=" text-4xl font-bold mb-5">
            <Typewriter
              text={[
                "Growth",
                "Selling",
                "Buying",
                "Purchases",
                "Collections",
                "Payments",
              ]}
              loop
              speed={500}
              //   cursor={false}
            />
          </h2>
          <div className=" container flex flex-row">
            <button
              type="submit"
              className=" bg-green-600 text-white text-sm mr-3 py-3 px-4 rounded-md"
            >
              Geting started for free
            </button>
            <button
              type="submit"
              className=" border border-green-600  border-solid py-2 px-4 rounded-md text-sm text-green-600"
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* video card */}
        <div className=" flex flex-row items-center mt-10 border border-solid border-black rounded-md p-2 w-80 mr-10 ">
          <img
            src="https://cdn.pixabay.com/photo/2021/01/03/13/55/christmas-tree-5884606_960_720.jpg"
            alt="banner"
            className="w-32  h-10 rounded-lg"
          />
          {/* Text */}
          <p className=" ml-2 leading-tight underline font-normal">
            {" "}
            see hoe zest is transforming businsess growth in dominoes{" "}
          </p>
        </div>
      </div>
      {/* right section */}

      <div className="w-3/5 h-full">
        {/*  animation */}
        {images?.map((item) => {
          return (
            <AnimatePresence mode="wait" key={item?.id}>
              {currentIndex === item?.id && item?.animation}
            </AnimatePresence>
          );
        })}
      </div>
    </section>
  );
}

export default FramerTest;
