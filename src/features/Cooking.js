import React from "react";
import { useLocation } from "react-router-dom";

const Cooking = () => {
  const location = useLocation();
  const recipe = location.state;

  console.log(recipe);

  let ingredients = recipe.ingredients ? recipe.ingredients.split("|") : "";

  let index;
  let notes;
  let instructions;
  if (recipe.instructions) {
    index = recipe.instructions.indexOf(" NOTES");
    notes = recipe.instructions.slice(index);
    instructions = recipe.instructions.slice(0, index);
    instructions = instructions.split(".");
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-yellow h-screen rounded-[400px]">
        <h1 className="text-taupe text-5xl font-unica m-[10px]">
          {recipe.title}
        </h1>
        <h2 className="text-darkbrown font-montserrat mt-[10px] text-xl">
          {recipe.servings}
        </h2>

        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col p-[20px] ml-48">
            <p className="text-taupe text-3xl font-unica text-center mb-5">
              Ingredients
            </p>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="list-disc text-darkbrown font-montserra text-xl"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col p-[20px] w-1/2">
            <p className="text-taupe text-3xl font-unica text-center mb-5">
              Instructions
            </p>
            <ul className="break-keep">
              {instructions.map((step, index) => (
                <li
                  key={index}
                  className="list-decimal text-darkbrown font-montserrat text-xl whitespace-normal"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="p-[20px] text-darkbrown font-montserrat text-xl p-10 pb-2 pt-2">
          {notes}
        </p>
        <div className="flex">
          <div className="flex flex-col mr-5 justify-center">
            <label className="text-taupe text-3xl font-unica">
              Click Play :)
            </label>
          </div>
          <audio controls src="./HitsDifferent.mp3" loop={true}></audio>
        </div>
      </div>
    </>
  );
};

export default Cooking;
