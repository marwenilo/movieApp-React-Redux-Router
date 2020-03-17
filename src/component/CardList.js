import React from "react";
import Card from "./Card";

const CardList = ({ movies, error }) => {
  return (
    <div className="movieApp">
      {movies.map((el, key) => (
        <Card
          key={key}
          e={el}
          error={() => error(el.name)}
        />
      ))}
    </div>
  );
};

export default CardList;
