import React from "react";
import styled from "styled-components";
import Section from "../Section/Section";

function Home() {
  return (
    <Container>
      <Section bgImage="frames1.jpeg" />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
