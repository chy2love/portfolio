import React from 'react';
import styled from 'styled-components';
import noticeIcon from '../../assets/noticeIcon.png';
export default function Header() {
  return (
    <Container>
      <Title>
        <TitleText>하영이에게 문의하기</TitleText>
      </Title>
      <DescriptionBox>
        <TextContainer>
          <img src={noticeIcon} alt="" />
          <DescriptionText>
            form을 연습한게 아닙니다. 진짜로 메일로 보내집니다!
          </DescriptionText>
        </TextContainer>
        <TextContainer>
          <img src={noticeIcon} alt="" />
          <DescriptionText>메일 확인 후 답변 드리겠습니다!</DescriptionText>
        </TextContainer>
      </DescriptionBox>
    </Container>
  );
}
const Container = styled.div`
  width: 980px;
  padding: 44px 0;
`;
const Title = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #1d1d1f;
  margin-bottom: 32px;
`;
const TitleText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #1d1d1f;
`;
const DescriptionBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  border-radius: 16px;
`;
const TextContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const DescriptionText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #888888;
`;
