import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Lunch = () => {
  const [data, setdata] = useState([]);
  const [search, setNewSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setdata(res.data.meals));
  }, [search]);

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          id="input-search"
          onChange={(e) => {
            setNewSearch(e.target.value);
          }}
          placeholder="Search lunch (english and LowerCase)"
        />
      </div>
      <div className="flex-lunch">
        {data &&
          data
            .filter((v) => v.strMeal.toLowerCase().includes(search))
            .map((lunch, index) => <Cards key={index} lunch={lunch} />)}
      </div>
    </div>
  );
};

export default Lunch;
