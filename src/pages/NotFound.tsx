import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import notFoundImg from '../assets/notFoundImg.png';
export default function NotFound() {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(-1);
  };
  return (
    <Container>
      <img src={notFoundImg} alt="Ooops..Error" />
      <Btn onClick={handleBtn}>이전페이지로 돌아가기</Btn>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 30px;
  background-color: #52525f;
`;
const Btn = styled.button`
  display: flex;
  height: 30px;
  padding: 4px 10px;
  border: 2px solid white;
  border-radius: 16px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
