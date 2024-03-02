import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backbtn from "../images/backArrow.png";
import play from "../images/play4.png";
import { Link } from "react-router-dom";
import redApple from "../images/cards/redApple.svg";
import redOrange from "../images/cards/redOrange.svg";
import redPineapple from "../images/cards/redPineapple.svg";
import redMango from "../images/cards/redMango.svg";
import redPassion from "../images/cards/redPassionFruit.svg";
import redStraw from "../images/cards/redStraw.svg";
import blueApple from "../images/cards/blueApple.svg";
import blueOrange from "../images/cards/blueOrange.svg";
import blueMango from "../images/cards/blueMango.svg";
import blueStraw from "../images/cards/blueStraw.svg";
import bluePineapple from "../images/cards/bluePineapple.svg";
import bluePassion from "../images/cards/bluePassionFruit.svg";
import RedCard from "./RedCard";
import BlueCard from "./BlueCard";
import "./Style.css";
import Card from "./Card";
import bnana from "../images/bnana.png";

import redCardImg from "../images/cards/redCard.svg";
import blueCardImg from "../images/cards/blueCard.svg";

const InitialRedCards = [
  {
    content: "Apple",
    image: redApple,
    isMatched: false,
  },
  {
    content: "Strawberry",
    image: redStraw,
    isMatched: false,
  },
  {
    content: "Orange",
    image: redOrange,
    isMatched: false,
  },
  {
    content: "Mango",
    image: redMango,
    isMatched: false,
  },
  {
    content: "Passion Fruit",
    image: redPassion,
    isMatched: false,
  },
  {
    content: "Pineapple",
    image: redPineapple,
    isMatched: false,
  },

  // Add more cards as needed
];

const InitialBlueCards = [
  {
    content: "Apple",
    image: blueApple,
    isMatched: false,
  },
  {
    content: "Strawberry",
    image: blueStraw,
    isMatched: false,
  },
  {
    content: "Orange",
    image: blueOrange,
    isMatched: false,
  },
  {
    content: "Mango",
    image: blueMango,
    isMatched: false,
  },
  {
    content: "Passion Fruit",
    image: bluePassion,
    isMatched: false,
  },
  {
    content: "Pineapple",
    image: bluePineapple,
    isMatched: false,
  },

  // Add more cards as needed
];

// const ProgressBar = ({ value }) => {
//   return (
//     <div>
//       <progress className="progressBar" value={value} max="100"></progress>
//       <img
//         style={{
//           position: "absolute",
//           right: "45%",
//           height: "20px",
//           width: "20px",
//         }}
//         src={bnana}
//         alt="Banana"
//       />
//     </div>
//   );
// };

const ActivityScreen = () => {
  const [redCards, setRedCards] = useState([]);
  const [blueCards, setBlueCards] = useState([]);
  const [redChoice, setRedChoice] = useState(null);
  const [blueChoice, setBlueChoice] = useState(null);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(11);
  const [countMatchedCards, setCountMatchedCards] = useState(0);
  const navigate = useNavigate();

  const shuffleCards = () => {
    const suffleRedCards = InitialRedCards.sort(() => Math.random() - 0.5).map(
      (card) => ({ ...card, id: Math.random() })
    );

    const suffleBlueCards = InitialBlueCards.sort(
      () => Math.random() - 0.5
    ).map((card) => ({ ...card, id: Math.random() }));

    setRedCards(suffleRedCards);
    setBlueCards(suffleBlueCards);
  };

  //useEffect to keep track of the selected cards and check the matching

  useEffect(() => {
    if (redChoice && blueChoice) {
      if (blueChoice.content === redChoice.content) {
        if (countMatchedCards === 5) {
          setTimeout(() => {
            navigate("/completed");
            return;
          }, 1500);
        } else {
          setCountMatchedCards((prevCount) => prevCount + 1);
        }

        setProgress((prevProgress) => Math.ceil(prevProgress + 100 / 6));
        setTimeout(() => {
          setRedCards((prevCards) =>
            prevCards.map((card) =>
              card.id === blueChoice.id || card.id === redChoice.id
                ? { ...card, isMatched: true }
                : card
            )
          );
          setBlueCards((prevCards) =>
            prevCards.map((card) =>
              card.id === blueChoice.id || card.id === redChoice.id
                ? { ...card, isMatched: true }
                : card
            )
          );
        }, 1000);
      }
      if (step < 1) {
        setTimeout(() => {
          alert("Sorry, out of moves😓, try again.");
          navigate("/outOfMoves");
          return;
        }, 1000);
      } else {
        setStep((prevCount) => prevCount - 1);
      }
      setTimeout(() => {
        setRedChoice(null);
        setBlueChoice(null);
      }, 1000);
    }
  }, [redChoice, blueChoice]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (clickedCard) => {
    if (!redChoice) {
      // Red card clicked
      setRedChoice(clickedCard);
    } else {
      setBlueChoice(clickedCard);
      // Blue card clicked

      // setRedChoice(null); // Reset selected red card
    }
  };

  return (
    <div className="activityContainer">
      <div className="activity">
        <div className="progressContainer">
          {/* <ProgressBar value={progress} /> */}
        </div>
        <Link to="/page4">
          <img className="backbtn" src={backbtn} />
        </Link>

        <div
          style={{
            position: "absolute",
            right: "45%",
            marginTop: "40px",
          }}>
          <h3>Moves Left:{step + 1} </h3>
        </div>

        <div className="card-container">
          <div className="redCard-grid card-grid">
            {redCards.map((card) =>
              !card.isMatched ? (
                <Card
                  key={card.id}
                  card={card}
                  handleClick={handleCardClick}
                  disabled={card.isMatched || redChoice}
                  redChoice={redChoice}
                  image={redCardImg}
                  flipped={card?.content === redChoice?.content}
                />
              ) : (
                <Card
                  key={card.id}
                  card={card}
                  handleClick={handleCardClick}
                  disabled={card?.isMatched || redChoice}
                  redChoice={redChoice}
                  image={redCardImg}
                  flag={true}
                  flipped={false}
                />
              )
            )}
          </div>

          <div className="blueCard-grid card-grid">
            {blueCards.map((card) =>
              !card.isMatched ? (
                <Card
                  key={card.id}
                  card={card}
                  handleClick={handleCardClick}
                  disabled={card.isMatched || !redChoice}
                  image={blueCardImg}
                  flipped={card?.content === blueChoice?.content}
                />
              ) : (
                <Card
                  key={card.id}
                  card={card}
                  handleClick={handleCardClick}
                  disabled={card?.isMatched || !redChoice}
                  image={blueCardImg}
                  flag={true}
                  flipped={false}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityScreen;
