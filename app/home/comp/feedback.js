import React from "react";
import "./loop.css";

export default function Feedback() {
  return (
    <div className="p-4 mt-20">
      <div className=" font-bold b-head text-center mb-16">
        Loved by <span className=" text-lb">Artists</span> around the World
      </div>

      <div className="overflow-hidden flex items-center gap-[20px] feedback-main">
        <div className=" flex  w-fit feedback-loop">
          {[...Array(10)].map((_, i) => {
            return (
              <div
                key={i}
                className="p-4 flex flex-col bg-zinc-900 min-h-[200px] h-fit max-w-[480px] min-w-[280px] md:w-[480px] rounded-xl"
              >
                <div className="flex items-center gap-4 p-2 min-h-fit ">
                  <div className=" bg-white h-[50px] aspect-square rounded-full"></div>
                  <div>
                    <h1 className="text"> Name </h1>
                    <p className=" sm-text">@id</p>
                  </div>
                  <div></div>
                </div>
                <div className=" h-full sm-text flex items-center justify-center p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur voluptas dicta ipsum porro dignissimos velit,
                  distinctio aliquam nemo possimus nobis sit unde magnam facere
                  repellendus et incidunt dolorem cumque repellat?
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex  w-fit feedback-loop" aria-hidden="true">
          {[...Array(10)].map((_, i) => {
            return (
              <div
                key={i}
                className="p-4 flex flex-col bg-zinc-900 min-h-[200px] h-fit max-w-[480px] min-w-[280px] md:w-[480px] rounded-xl"
              >
                <div className="flex items-center gap-4 p-2 min-h-fit ">
                  <div className=" bg-white h-[50px] aspect-square rounded-full"></div>
                  <div>
                    <h1 className="text"> Name </h1>
                    <p className=" sm-text">@id</p>
                  </div>
                  <div></div>
                </div>
                <div className=" h-full sm-text flex items-center justify-center p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur voluptas dicta ipsum porro dignissimos velit,
                  distinctio aliquam nemo possimus nobis sit unde magnam facere
                  repellendus et incidunt dolorem cumque repellat?
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
