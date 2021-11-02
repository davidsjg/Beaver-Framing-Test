import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Section/Section";
import CardContext from "../../api/CardContext";

function Home() {
  const [cardState, setCardState] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });
  const [tempCard, setTempCard] = useState("frames.jpeg");

  let tempBG;
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
    setCardState(card);
  }
  function handleClick() {
    console.log(cardState);
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>
      <CardContext.Provider value={cardState}>
        <Container>
          <Section bgImage={tempCard} updateBG={updateBG} />
        </Container>
      </CardContext.Provider>
    </>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;

  transition: transform 0.2s;
`;
