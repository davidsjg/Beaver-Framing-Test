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

  function updateBG(card) {
    setCardState(...cardState, card);
  }

  return (
    <CardContext.Provider value={cardState}>
      <Container>
        <Section bgImage="frames1.jpeg" updateBG="updageBG" />
      </Container>
    </CardContext.Provider>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
