import React from "react";
import "./Style.css";

const Card = ({ card, handleClick, disabled, image, flag, flipped }) => {
  const handleCardClick = () => {
    if (!disabled) {
      handleClick(card);
    }
  };
  return (
    <>
      <div className="blueCard card">
        <div
          id={flag ? "hideComponent" : ""}
          className={flipped ? "flipped" : ""}>
          <img className="card-img front" src={card.image} alt="Front image" />
          <img
            className="card-img "
            src={image}
            alt="Back card"
            onClick={handleCardClick}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
