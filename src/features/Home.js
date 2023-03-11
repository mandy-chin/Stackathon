import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const searchForRecipe = (event) => {
    event.preventDefault();
    if (event.target.query.value.length !== 0) {
      navigate("/recipe", { state: event.target.query.value });
    }
  };

  return (
    <div>
      <div className="flex flex-col place-content-center">
        <section className="flex flex-col">
          <section className="flex justify-center">
            <h1 className="font-unica text-taupe text-8xl mt-10 mb-[20px]">
              What's cooking, good-looking ? ;)
            </h1>
          </section>

          <section className="w-screen flex justify-center">
            <img src="./logo.png" className="object-contain h-[480px]" />
          </section>

          <section className="flex flex-row justify-center mt-[20px] mb-2">
            <form onSubmit={searchForRecipe}>
              <input
                type="text"
                placeholder="discover your next culinary masterpiece"
                name="query"
                className="bg-yellow rounded-md mr-5 font-montserrat w-96 text-center h-[35px]"
              ></input>
              <button className="text-taupe font-unica text-3xl hover:underline decoration-4 decoration-dotted decoration-yellow mt-5">
                Search
              </button>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;
