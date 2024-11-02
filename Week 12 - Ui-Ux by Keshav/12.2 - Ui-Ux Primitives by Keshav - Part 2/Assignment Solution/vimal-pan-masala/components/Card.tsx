import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="group w-full h-full bg-orange-100 rounded-2xl flex flex-col md:flex-row items-center justify-center p-6 gap-12 ">
      <Image
        src="/card-image.png"
        alt="Card Image"
        width={270}
        height={270}
        className="group-hover:-translate-y-1 transition-all duration-300 object-contain"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-orange-950">
          <h3 className="lg:text-2xl text-xl font-semibold tracking-tighter">
            <span className="text-orange-600">Vimal</span> Elaichi
          </h3>
          <p className="lg:text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
            Die Now
          </button>
          <button className="bg-orange-50 text-orange-950 px-4 py-2 rounded-lg hover:bg-orange-50/50 transition-all duration-300">
            Die Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
