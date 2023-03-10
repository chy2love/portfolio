import React from 'react';
import styled from 'styled-components';
import greetImg from '../../assets/greetImg.png';
import KakaoMap from './KakaoMap';
export default function InformationArea() {
  return (
    <Container>
      <ImgContainer>
        <img src={greetImg} alt="" />
      </ImgContainer>
      <TextArea>
        <TextContainer>
          <Title>이름</Title>
          <Desc>최하영</Desc>
        </TextContainer>
        <TextContainer>
          <Title>전화번호</Title>
          <Desc>010-6408-9889</Desc>
        </TextContainer>
        <TextContainer>
          <Title>이메일</Title>
          <Desc>chlgkduddlek@gmail.com</Desc>
        </TextContainer>
        <TextContainer>
          <Title>주소</Title>
          <Desc>아래와 같음. 서울특별시 송파구 삼전동</Desc>
        </TextContainer>
      </TextArea>
      <KakaoMap />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 277px;
`;
const TextArea = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
  margin-bottom: 44px;
  gap: 8px;
`;
const TextContainer = styled.div`
  display: flex;
  gap: 6px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #8b8b8b;
`;
const Desc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;
