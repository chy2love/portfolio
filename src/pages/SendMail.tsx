import React from 'react';
import styled from 'styled-components';
import Header from '../components/SendMail/Header';
import MainArea from '../components/SendMail/MainArea';
export default function SendMail() {
  return (
    <Container>
      <Header />
      <MainArea />
    </Container>
  );
}
const Container = styled.div`
  padding-top: 52px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
