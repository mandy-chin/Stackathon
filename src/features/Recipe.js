import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import RecipeModal from "./RecipeModal";

const Recipe = () => {
  const location = useLocation();
  const query = location.state;
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [page, setPage] = useState(1);

  const [recipeSearchResults, setRecipeSearchResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { data } = await axios.get(
        "https://api.api-ninjas.com/v1/recipe?query=" +
          query +
          "&offset=" +
          page,
        {
          headers: {
            "X-Api-Key": "x+Sp4kCaq3XkPRDAxEA9eg==KyBttKrpdAFmT1bU",
          },
        }
      );

      if (data.length === 0) {
        setRecipeSearchResults("No Search Results Found");
      } else {
        // concating arrays; taking prev and concat new array data
        setRecipeSearchResults((prev) => [...prev, ...data]);
      }
    };

    fetchResults();
  }, [page]);

  const handleClick = (info) => {
    setOpen(!open);
    setRecipe(info);
  };

  const addResults = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <div className="flex flex-col">
          <h2 className="text-yellow text-8xl font-unica ml-[20px] mb-[20px] mt-[20px]">
            Currently craving...
          </h2>
          <div className="flex justify-center">
            <h2 className="text-taupe text-6xl font-montserrat text-center border-b border-brown  pb-[20px]">
              ~ {location.state} ~
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {Array.isArray(recipeSearchResults) &&
          recipeSearchResults.length !== 0 ? (
            <div>
              <ul className="flex flex-col items-center mt-[30px]">
                {recipeSearchResults.map((recipe, index) => (
                  <li
                    key={index}
                    className="mb-[20px] font-synco text-[20px] text-darkbrown hover:underline decoration-4 decoration-dotted decoration-yellow"
                    onClick={() => {
                      handleClick(recipe);
                    }}
                  >
                    {recipe.title}
                  </li>
                ))}
              </ul>
              {recipeSearchResults.length >= 10 ? (
                <button
                  onClick={addResults}
                  className="text-taupe font-unica text-3xl hover:underline decoration-4 decoration-dotted decoration-yellow mb-5 w-full"
                >
                  Hungry for more?
                </button>
              ) : (
                ""
              )}
            </div>
          ) : Array.isArray(recipeSearchResults) ? (
            <div className="flex flex-col mt-[50px] rounded-[80px] bg-orange-50/50 h-[400px] w-[500px] justify-center">
              <img src="./veggies.png" />
              <p className="text-center text-4xl font-noto text-taupe">
                serving up some options...
              </p>
            </div>
          ) : (
            <div className="flex flex-col mt-[50px] rounded-[80px] bg-orange-50/50 h-[400px] w-[500px] justify-center">
              <img src="./veggies.png" />
              <p className="text-center text-5xl font-noto text-taupe mb-[20px]">
                no results found
              </p>
              <Link to="/home" className="flex justify-center mt-[10px]">
                <button className="text-taupe font-unica text-3xl hover:underline decoration-4 decoration-dotted decoration-green">
                  try again
                </button>
              </Link>
            </div>
          )}
        </div>
        <RecipeModal modal={setOpen} status={open} info={recipe} />
      </div>
    </>
  );
};

export default Recipe;
