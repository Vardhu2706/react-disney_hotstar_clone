// Importing Helpers
import React from "react";
import Card from "./Card";

const Section = ({ genre, movies }) => {
  return (
    <>
      <section>
        <h2>{genre}</h2>
        <ul className="listings">
          {movies.map((movie) => {
            return (
              <li>
                <Card
                  poster={movie.posterurl}
                  title={movie.title}
                  story={movie.storyline}
                  year={movie.year}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Section;
