import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GroceryList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ingredients = location.state;

  return (
    <div className="flex flex-row justify-center items-center h-full">
      <img src="./grocery.png" className="object-contain h-[480px]" />
      <div className="bg-mint m-[40px] rounded-lg h-full w-[30rem]">
        <p className="text-taupe text-6xl font-unica text-center m-[3rem]">
          Grocery List
        </p>
        <ul className="flex flex-col w-max">
          {ingredients ? (
            ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="list-disc text-darkbrown font-montserrat mb-2 ml-[5rem]"
              >
                {ingredient}
              </li>
            ))
          ) : (
            <div className="list-disc text-darkbrown font-montserrat text-xl text-center w-[30rem]">
              No ingredients added yet :)
            </div>
          )}
        </ul>
        {ingredients ? (
          <button className="text-taupe text-3xl font-unica text-center w-[30rem] mt-7 mb-5 hover:underline decoration-4 decoration-dotted decoration-green ">
            Buy groceries
          </button>
        ) : (
          <button
            className="text-taupe text-3xl font-unica text-center w-[30rem] mt-10 mb-5 hover:underline decoration-4 decoration-dotted decoration-green"
            onClick={() => {
              navigate("/home");
            }}
          >
            Find a Recipe
          </button>
        )}
      </div>
    </div>
  );
};

export default GroceryList;
