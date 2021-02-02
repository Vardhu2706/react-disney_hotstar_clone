import React from "react";

const Card = ({ poster, title, story, year }) => {
  return (
    <article>
      <div className="thumbnail">
        <img src={poster} alt={title} />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="info">{year}</div>
        <div className="storyline">{story}</div>
      </div>
    </article>
  );
};

export default Card;
