"use client";

import Image from "next/image";
import React from "react";

const Bento = () => {
  return (
    <div className="p-4">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-4
          auto-rows-[180px]
          gap-4
        "
      >
        {/* Box 1 */}
        <div className="lg:row-span-2 rounded-3xl bg-blue-500 p-6 shadow-xl text-white">
          <Image
            alt="try"
            src="/file.svg"
            width={100}
            height={100}
            className="w-full h-full object-fit shadow-lg p-4"
          />
        </div>

        {/* Box 2 */}
        <div className="lg:col-span-2 rounded-3xl bg-purple-500 p-6 shadow-xl text-white">
          Item 2
        </div>

        {/* Box 3 */}
        <div className="rounded-3xl bg-pink-500 p-6 shadow-xl text-white">
          Item 3
        </div>

        {/* Box 4 */}
        <div className="rounded-3xl bg-green-500 p-6 shadow-xl text-white">
          Item 4
        </div>

        {/* Box 5 */}
        <div className="lg:col-span-2 rounded-3xl bg-orange-500 p-6 shadow-xl text-white">
          Item 5
        </div>
      </div>
    </div>
  );
};

export default Bento;
