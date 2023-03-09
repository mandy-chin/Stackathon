import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex flex-col  ">
        <section className="flex justify-center">
          <h1 className="font-synco"> What's cooking, good-looking?</h1>
        </section>
        <section className="flex flex-row justify-center">
          <input
            type="text"
            placeholder="Your Next Culinary Masterpiece"
          ></input>
          <button>Search</button>
        </section>
      </section>
    </>
  );
};

export default Home;
