import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function ContactMe() {
  return (
    <Container>
      <TextArea>저와 인연을 만들고 싶으신 의사가 있으시다면</TextArea>
      <BtnArea to={'/sendMail'}>하영에게 문의하기</BtnArea>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 0;
  gap: 16px;
  background-color: #52525f;
`;
const TextArea = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: white;
  line-height: 30px;
`;
const BtnArea = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 140px;
  height: 30px;
  padding: 4px 10px;
  border: 1px solid white;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background-color: transparent;
  cursor: pointer;
`;
