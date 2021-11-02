import React, { useState, useContext, useRef } from "react";
import styled from "styled-components";
import CardContext from "../../api/CardContext";

function Section({ bgImage, updateBG }) {
  const { card1, card2, card3, card4 } = useContext(CardContext);
  const [tempCard, setTempCard] = useState(true);

  let temp1 = useRef(Card1);

  function handleOver(e) {
    console.log(e.target.dataset.info);
    updateBG(e.target.dataset.info);
  }
  function handleExit() {
    updateBG("Card5");
  }

  return (
    <Wrap bgImage={bgImage}>
      <ItemText>
        <h1>You can Beaver just about anthing.</h1>
      </ItemText>
      <CardGroup>
        <Card1
          data-info="Card1"
          onMouseEnter={handleOver}
          onMouseLeave={handleExit}
        >
          Custom Frame
        </Card1>
        <Card2
          data-info="Card2"
          onMouseEnter={handleOver}
          onMouseLeave={handleExit}
        >
          Gift Ideas
        </Card2>
        <Card3
          data-info="Card3"
          onMouseEnter={handleOver}
          onMouseLeave={handleExit}
        >
          Arts, Prints, Photographs
        </Card3>
        <Card4
          data-info="Card4"
          onMouseEnter={handleOver}
          onMouseLeave={handleExit}
        >
          Textiles
        </Card4>
      </CardGroup>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  margin-top: 15vh;
  text-align: center;
  height: 100px;
  width: 200px;
  background: darkOrange;
  border-radius: 20px;
  font-size: small;

  //   padding-top: 15px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;

  //   color: black;
`;

const CardGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
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
  // margin: 0 10px;
`;

const Card2 = styled(Card1)``;
const Card3 = styled(Card1)``;
const Card4 = styled(Card1)``;
