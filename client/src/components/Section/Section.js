import React, { useState, useContext, useRef } from "react";
import styled from "styled-components";
import CardContext from "../../api/CardContext";
import frame from "./frames.jpeg";
import frame1 from "./frames1.jpeg";
import frame2 from "./frames2.jpeg";
import frame3 from "./frames3.jpeg";
import frame4 from "./frames4.jpeg";
import * as palette from "./variables.js";

function Section() {
  const [cardState, setCardState] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  const [tempCard, setTempCard] = useState("frames.jpeg");
  let tempImg = "frames.jpeg";

  console.log(palette.frame);

  function handleOver(e) {
    // console.log(e.target.dataset.info);
    updateBG(e.target.dataset.info);
  }
  function handleExit() {
    updateBG("Card5");
  }

  let Card1 = "Card1";
  let Card2 = "Card2";
  let Card3 = "Card3";
  let Card4 = "Card4";
  let Card5 = "Card5";

  function updateBG(card) {
    console.log(card);
    if (card === Card1) {
      setTempCard("frames1.jpeg");
    } else if (card === Card2) {
      setTempCard("frames2.jpeg");
    } else if (card === Card3) {
      setTempCard("frames3.jpeg");
    } else if (card === Card4) {
      setTempCard("frames4.jpeg");
    } else if (card === Card5) {
      setTempCard("frames.jpeg");
    }
    setCardState(tempCard);
  }

  function handleClick() {
    console.log(tempCard);
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>
      <Wrap bgImage={tempCard}>
        <ItemText>
          <h1>You can Beaver just about anthing.</h1>
        </ItemText>
        <CardGroup>
          <CardOne
            data-info="Card1"
            onMouseEnter={handleOver}
            onMouseLeave={handleExit}
          >
            Custom Frame
          </CardOne>
          <CardTwo
            data-info="Card2"
            onMouseEnter={handleOver}
            onMouseLeave={handleExit}
          >
            Gift Ideas
          </CardTwo>
          <CardThree
            data-info="Card3"
            onMouseEnter={handleOver}
            onMouseLeave={handleExit}
          >
            Arts, Prints, Photographs
          </CardThree>
          <CardFour
            data-info="Card4"
            onMouseEnter={handleOver}
            onMouseLeave={handleExit}
          >
            Textiles
          </CardFour>
        </CardGroup>
      </Wrap>
    </>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: ${palette.frame}
  // background-image: ${(props) => `url(./${props.bgImage})`}
  background-image: ${(props) => `url("/images/${props.bgImage}")`};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 250ms ease-in;
  // transition-property: all;
  // transition-duration: 2s;
`;

const ItemText = styled.div`
  margin-top: 15vh;
  text-align: center;
  height: 100px;
  width: 200px;
  background: darkOrange;
  border-radius: 20px;
  font-size: small;
`;

const CardGroup = styled.div`
  display: flex;
  margin-bottom: 120px;
  cursor: pointer;
`;

const CardOne = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 128px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.85;
`;

const CardTwo = styled(CardOne)``;
const CardThree = styled(CardOne)``;
const CardFour = styled(CardOne)``;
