import React from "react";
import Typewriter from "react-ts-typewriter";

function DeveloperSection() {
  //   const [textToShow, settextToShow] = useState(0);
  return (
    <section className="container flex flex-col-reverse md:flex-row items-center  px-6 mx-auto mt-10 space-y-0 md:space-y-0 bg-slate-500 ">
      {/* text part  */}
      <div className=" w-1/2">
        <p className=" text-xs text-red"> Build Better</p>
        <h3 className=" font-bold text-4xl text-white">
          {" "}
          Bilt for Developers Ease
        </h3>
        <p className="mt-10">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          natus, eveniet mollitia modi similique suscipit atque quidem molestias
          placeat facere?{" "}
        </p>

        <div className=" flex flex-row justify-between items-center mt-10">
          <button
            type="submit"
            className=" bg-green-500 text-white text-2xl px-3 py-2 rounded-md"
          >
            Start integrating
          </button>
          <button
            type="submit"
            className=" border border-solid text-white px-3 py-2 rounded-md"
          >
            Learn More
          </button>
        </div>
      </div>
      {/*  code part  */}
      <div className=" w-1/2">
        <div className=" flex flex-col bg-black py-28 w-full h-full relative ">
          <div className=" flex flex-row w-18 justify-between absolute top-0 px-2 mt-2  ">
            {/* dots */}
            <div
              className=" rounded-lg bg-red-400 mr-2 "
              style={{
                width: 10,
                height: 10,
                background: "red",
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                background: "yellow",
                borderRadius: "100%",
              }}
            />
            <div
              className=" mx-2"
              style={{
                width: 10,
                height: 10,
                background: "green",
                borderRadius: "100%",
              }}
            />
          </div>

          <div className="text-white absolute top-10 left-5">
            <p className=" text-sm  mb-5">
              <Typewriter
                text="const ZestInstance =   new zest( {"
                speed={500}
                cursor={false}
              />
            </p>
            <p className=" text-sm  mb-5">
              <Typewriter
                text="Key: your-public-api-key-goes-here,"
                speed={500}
                // delay={45000}
                cursor={false}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSection;
