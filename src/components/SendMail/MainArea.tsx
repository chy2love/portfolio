import React from 'react';
import styled from 'styled-components';
import InformationArea from './InformationArea';
import TextArea from './TextArea';
export default function MainArea() {
  return (
    <Container>
      <InformationArea />
      <TextArea />
    </Container>
  );
}
const Container = styled.div`
  width: 980px;
  display: flex;
  gap: 20px;
`;
