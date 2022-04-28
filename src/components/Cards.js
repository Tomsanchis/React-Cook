import React from "react";

const Cards = ({ lunch }) => {
  return (
    <div className="meals-container">
      <h3>{lunch.strMeal}</h3>
      <p>Origin : {lunch.strArea}</p>
      <img src={lunch.strMealThumb} alt={lunch.strMeal}></img>
      <p>{lunch.strInstructions}</p>
      {/* <p>
        {lunch.strInstructions.length > 200
          ? `${lunch.strInstructions.substring(0, 200)}...`
          : lunch.strInstructions}
      </p> */}
    </div>
  );
};

export default Cards;
