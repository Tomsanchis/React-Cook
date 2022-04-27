import React from "react";

const Cards = ({ lunch }) => {
  return (
    <article className="article-container">
      <h3>{lunch.strMeal}</h3>
      <p>Origin : {lunch.strArea}</p>
      <img src={lunch.strMealThumb} alt={lunch.strMeal}></img>
      {/* <p>{lunch.strInstructions}</p> */}
      <p>
        {lunch.strInstructions.length > 200
          ? `${lunch.strInstructions.substring(0, 200)}...`
          : lunch.strInstructions}
      </p>
    </article>
  );
};

export default Cards;
