import React from "react";
import { useNavigate, Link } from "react-router-dom";

const RecipeModal = (props) => {
  const navigate = useNavigate();

  const closeModal = () => {
    props.modal(!props.status);
  };

  const cookRecipe = () => {
    navigate("/cooking", { state: props.info });
  };

  //   console.log(props.info.instructions);

  let ingredients = props.info.ingredients
    ? props.info.ingredients.split("|")
    : "";

  // let instructions = props.info.instructions
  // ? props.info.instructions.split(".")
  // : "";

  let index;
  let notes;
  let instructions;
  if (props.info.instructions) {
    index = props.info.instructions.indexOf(" NOTES");
    notes = props.info.instructions.slice(index);
    instructions = props.info.instructions.slice(0, index);
    instructions = instructions.split(".");
    // instructions = instructions.slice(0, instructions.length - 1);
    // console.log(instructions);
  }

  return (
    <div
      className={
        props.status
          ? "fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
          : "hidden"
      }
    >
      <div className="bg-beige bg-orange-50/50 p-2 h-[40rem] w-[50rem] rounded-[40px] flex flex-col justify-evenly items-center">
          <h1 className="text-taupe text-4xl font-unica m-[10px] w-fit mt-5">
            {props.info.title}
          </h1>
          <h2 className="text-darkbrown font-montserrat mt-[10px] text-lg w-fit">
            {props.info.servings}
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col p-[20px] m-[10px] mb-0 pb-[10px]">
              <Link
                to="/grocery"
                className="text-taupe text-2xl font-unica text-center hover:underline decoration-4 decoration-dotted decoration-green"
              >
                <p className="">Ingredients</p>
              </Link>
              <ul>
                {ingredients
                  ? ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="list-disc text-darkbrown font-montserrat"
                      >
                        {ingredient}
                      </li>
                    ))
                  : "Prepping ingredients"}
              </ul>
            </div>

            <div className="flex flex-col p-[20px] mt-[10px] mr-[20px] ml-[20px] mb-0 pb-[10px]">
              <p className="text-taupe text-2xl font-unica text-center">
                Instructions
              </p>
              <ul className="break-keep">
                {instructions
                  ? instructions.map((step, index) => (
                      <li
                        key={index}
                        className="list-decimal text-darkbrown font-montserrat"
                      >
                        {step}
                      </li>
                    ))
                  : "Loading instructions"}
              </ul>
            </div>
          </div>

          <p className="p-[10px] text-darkbrown font-montserrat">{notes}</p>

          <div className="flex justify-center justify-evenly w-[50rem] mb-5">
            <button
              onClick={closeModal}
              className="text-taupe font-unica text-2xl hover:underline decoration-4 decoration-dotted decoration-green"
            >
              Close
            </button>
            <button
              onClick={cookRecipe}
              className="text-taupe font-unica text-2xl hover:underline decoration-4 decoration-dotted decoration-green"
            >
              Let's get cooking!
            </button>
          </div>
      </div>
    </div>
  );
};

export default RecipeModal;
