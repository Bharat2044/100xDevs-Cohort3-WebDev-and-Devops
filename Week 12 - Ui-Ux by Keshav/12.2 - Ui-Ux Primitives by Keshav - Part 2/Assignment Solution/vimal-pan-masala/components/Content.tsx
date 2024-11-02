import React from "react";
import Card from "./Card";
const Content = () => {
  return (
    <section className="py-12 px-4 flex flex-col items-center justify-center mx-4 bg-orange-50 rounded-2xl shadow-md gap-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl font-extrabold text-orange-950 tracking-tighter">
          Cancerous Products
        </h2>
        <p className="text-xl text-orange-950 text-center max-w-lg">
          Discover an extensive selection of highly cancerous products designed
          specifically for you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Content;
