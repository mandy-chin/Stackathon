import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col place-content-center">
        <section className="flex flex-col">
          <section className="flex justify-center">
            <h1 className="font-unica text-taupe text-8xl mt-10 mb-10">
              What's cooking, good-looking ? ;)
            </h1>
          </section>

          <section className="w-screen flex justify-center">
            <img src="./logo.png" className="object-contain h-[500px]"/>
          </section>

          <section className="flex flex-row justify-center">
            <input
              type="text"
              placeholder="discover your next culinary masterpiece"
              className="bg-yellow rounded-md mr-5 font-montserrat w-96 text-center"
            ></input>
            <button className="text-taupe font-unica text-2xl hover:underline decoration-dotted decoration-yellow">
              Search
            </button>
          </section>

        </section>
      </div>
    </div>
  );
};

export default Home;
