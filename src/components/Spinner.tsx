import React from 'react';
import styled, { css, keyframes } from 'styled-components';
export default function Spinner() {
  return (
    <Loading>
      <LoadingText>
        <LoadingTextWords>C</LoadingTextWords>
        <LoadingTextWords>h</LoadingTextWords>
        <LoadingTextWords>o</LoadingTextWords>
        <LoadingTextWords>i</LoadingTextWords>
        <LoadingTextWords> </LoadingTextWords>
        <LoadingTextWords>H</LoadingTextWords>
        <LoadingTextWords>a</LoadingTextWords>
        <LoadingTextWords>y</LoadingTextWords>
        <LoadingTextWords>o</LoadingTextWords>
        <LoadingTextWords>u</LoadingTextWords>
        <LoadingTextWords>n</LoadingTextWords>
        <LoadingTextWords>g</LoadingTextWords>
      </LoadingText>
    </Loading>
  );
}
const positionCenter = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;
const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
`;
const LoadingText = styled.div`
  ${positionCenter}
  width: 100%;
  height: 100%;
  line-height: 100px;
`;

const blurText = keyframes`
    0%{
        filter: blur(0px);
    }
    100%{
        filter: blur(4px);
    }
    
`;
const count = (i: number) => {
  return css`
    &:nth-child(${i + 1}) {
      filter: blur(0px);
      animation: ${blurText} 1.5s ${i / 10}s infinite linear alternate;
    }
  `;
};
const arr = new Array(12);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}
const LoadingTextWords = styled.span`
  display: inline-block;
  margin: 0 5px;
  color: #fff;
  ${arr.map((i) => count(i))}/* &:nth-child(1) {
    filter: blur(0px);
    animation: ${blurText} 1.5s 0s infinite linear alternate;
  }
  &:nth-child(2) {
    filter: blur(0px);
    animation: ${blurText} 1.5s 0.2s infinite linear alternate;
  }
  &:nth-child(3) {
    filter: blur(0px);
    animation: ${blurText} 1.5s 0.4s infinite linear alternate;
  } */
`;
