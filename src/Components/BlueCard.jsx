import React from "react";
import "./Style.css";
import blueCardImg from "../images/cards/blueCard.svg";

const BlueCard = ({ card, handleBlueChoice }) => {
  const handleClick = () => {
    handleBlueChoice(card);
  };
  return (
    <div className="blueCard card">
      <div className="blue-container">
        <img
          className="card-img front-blueCard"
          src={card.image}
          alt="Front image"
        />
        <img
          className="card-img"
          src={blueCardImg}
          alt="Back card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default BlueCard;
