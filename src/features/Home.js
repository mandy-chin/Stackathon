import React from "react";

const Home = () => {
  return (
    <>
      <section id="homepageContainer">
        <section>
          <h1> What's cooking, good-looking?</h1>
        </section>
        <section id="searchBarContainer">
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
