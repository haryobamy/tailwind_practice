import React from "react";

function Features() {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 spac-y-12 md:space-y-0 md:flex-row">
        {/* what's different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className=" max-w-md text-4xl font-bold text-center md:text-left">
            What`s different about manage?
          </h2>
          <p className="max-w-sm text-center text-slate-800 ">
            Manage provide all the fuctionality your team needs, without the
            complexity. Our sofware is tailor-made for moder digital product
            teams.
          </p>
        </div>
        {/* numbered list */}
        <div className=" flex flex-col space-y-8 md:w-1/2">
          {/* list item */}
          {Array(3)
            ?.fill(1)
            ?.map((item, i) => {
              return (
                <div className=" flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* header */}
                  <div className=" rounded-l-full bg-orange-500 md:bg-transparent">
                    <div className=" flex items-center space-x-2">
                      <div className=" px-4 py-2 text-white rounded-full md:py-1 bg-red-400">
                        {`0${i + 1}`}
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Track company wide progress
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className=" hidden mb-4 text-lg font-bold md:block">
                      Track company wide progress
                    </h3>
                    <p className=" text-slate-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus exercitationem, eveniet quidem vel nihil
                      aspernatur accusantium cumque minus similique obcaecati
                      iure doloremque pariatur dolores perspiciatis temporibus
                      officia laborum praesentium error quod. Itaque, labore at?
                      Nulla nam quos tempora at porro.
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Features;
