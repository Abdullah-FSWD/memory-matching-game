import React from "react";
import "./Style.css";
import redCardImg from "../images/cards/redCard.svg";

const RedCard = ({ card, handleRedChoice }) => {

    const handleClick = () => {
        handleRedChoice(card);
    }
  return (
    <div className="redCard card">
      <div>
        <img
          className="card-img front-redCard"
          src={card.image}
          alt="Front image"
        />
        <img
          className="card-img"
          src={redCardImg}
          alt="Back Card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default RedCard;
