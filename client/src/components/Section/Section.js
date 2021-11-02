import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>You can Beaver just about anthing.</h1>
      </ItemText>
      <CardGroup>
        <Card1>Custom Frame</Card1>
        <Card2>Gift Ideas</Card2>
        <Card3>Arts, Prints, Photographs</Card3>
        <Card4>Textiles</Card4>
      </CardGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/frames1.jpeg");
`;

const ItemText = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100px;
  width: 200px;
  color: black;
  background: darkOrange;
  border-radius: 20px;
`;

const CardGroup = styled.div`
  display: flex;
`;

const Card1 = styled.div`
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

const Card2 = styled(Card1)``;
const Card3 = styled(Card1)``;
const Card4 = styled(Card1)``;
