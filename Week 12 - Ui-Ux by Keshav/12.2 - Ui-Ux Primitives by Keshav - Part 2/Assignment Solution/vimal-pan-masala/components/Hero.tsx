import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="md:text-6xl text-4xl font-extrabold text-orange-950 tracking-tighter">
          Bolo Zubaan <span className="text-orange-50">Canceri</span>
        </h1>
        <p className="md:text-xl text-lg text-orange-950">
          More you eats, sooner you dies
        </p>
      </div>
      <img
        src="/hero-image.png"
        alt="Bolo Zubaan Canceri"
        width={500}
        height={500}
        className="w-[80%] md:w-[40%] h-full object-contain sticky top-0 right-0"
      />
    </section>
  );
};

export default Hero;
