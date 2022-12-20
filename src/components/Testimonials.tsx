import React from "react";

function Testimonials() {
  return (
    <section>
      <div className=" max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* heading */}

        <h2 className="text-4xl font-bold text-center">
          What`s Different About Manage?
        </h2>
        {/* testimonials */}
        <div className=" flex flex-col mt-24 md:flex-row md:space-x-6">
          {Array(3)
            ?.fill({})
            ?.map((i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i > 0 ? "hidden md:flex" : "flex"
                  }  flex-col items-center p-6 space-y-6 rounded-lg bg-slate-500  md:w-1/3`}
                >
                  <img
                    src="https://github.com/bradtraversy/tailwind-landing-page/blob/main/img/avatar-anisha.png?raw=true"
                    alt=""
                    className=" w-16 -mt-14"
                  />
                  <h5 className=" text-lg font-bold">Anisha Li</h5>
                  <p className=" text-sm text-slate-100">
                    `Manage has supercharged our teams`s workflow. the abiltity
                    to maintian visibility on larger milestones at all times
                    keeps everyonr motivated.`
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
