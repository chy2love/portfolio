import React from 'react';
import styled from 'styled-components';
export default function BGAnime() {
  return (
    <Container>
      <ScrollArea></ScrollArea>
      <ImgContainer>
        <ImgArea
          src={`${process.env.PUBLIC_URL}/canvasVideo/canvasVideo51.png`}
        ></ImgArea>
      </ImgContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const ScrollArea = styled.div`
  padding-top: 52px;
  background-color: black;
  /* height: 200vh; */
`;
const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
`;
const ImgArea = styled.img`
  width: 100vw;
`;
