import React, { useEffect, useState } from "react";
import illustration from "../assests/img/illustration-intro.svg";
import sampleimange from "../assests/img/tailwind_logo.svg";

const sectionData = [
  {
    id: 1,
    largeLabel: "Collect Payment Easily",
    smallText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor quae eligendi delectus recusandae neque quod consequatur in facere. At! ",
    image: illustration,
  },
  {
    id: 2,
    largeLabel: "Collect Payment Easily 2",
    smallText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor quae eligendi delectus recusandae neque quod consequatur in facere. At! 2 ",
    image: sampleimange,
  },
  {
    id: 3,
    largeLabel: "Collect Payment Easily 3",
    smallText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor quae eligendi delectus recusandae neque quod consequatur in facere. At! 3 ",
    image:
      "https://cdn.pixabay.com/photo/2021/01/03/13/55/christmas-tree-5884606_960_720.jpg",
  },
];

function TestSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const length = sectionData?.length;

    setTimeout(() => {
      setCurrentIndex((prev) => (currentIndex === length - 1 ? 0 : prev + 1));
    }, 3000);
  }, [currentIndex]);

  return (
    <div className="container flex flex-col-reverse md:flex-row items-center  px-6 mx-auto mt-10 space-y-0 md:space-y-0 ">
      {/*  accordion */}
      <div className=" flex flex-col space-y-8 md:w-1/2">
        {sectionData?.map((item, index) => {
          return (
            <div key={item?.id}>
              <div className=" flex flex-row items-center justify-between mb-5">
                <h2 className="">{item?.largeLabel}</h2>
                <span> open</span>
              </div>

              {currentIndex === index && (
                <>
                  <p>{item?.smallText}</p>
                  <progress
                    value="80%"
                    color="green"
                    style={{
                      width: "100%",
                      height: 3,
                      color: "green",
                      background: "green",
                    }}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* image */}
      <div className="md:w-1/2 ">
        <img src={sectionData[currentIndex].image} alt="sample" />
      </div>
    </div>
  );
}

export default TestSection;
