import React from "react";

const HeroBento = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-2 p-4">
      {" "}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <div className="text-3xl lg:text-[60px] font-bold text-black">
          My practice center
        </div>
        <div className="text-lg text-gray-600 mt-2">
          Welcome to our practice center!
        </div>
      </div>
      <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-4 auto-rows-[180px] gap-4">
        <div className="lg:col-span-2 rounded-3xl bg-blue-500 p-6 shadow-xl text-white">
          Item 1{" "}
        </div>
        <div className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-purple-500 p-6 shadow-xl text-white">
          Item 2
        </div>
        <div className="rounded-3xl bg-green-500 p-6 shadow-xl text-white">
          Item 3
        </div>
        <div className="rounded-3xl bg-yellow-500 p-6 shadow-xl text-white">
          Item 4
        </div>
      </div>
    </div>
  );
};

export default HeroBento;
