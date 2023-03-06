import React from 'react';
import styled from 'styled-components';
import dotIcon from '../assets/dotIcon.png';
export default function IntroArea() {
  return (
    <Container>
      <ContentContainer>
        <img src={dotIcon} alt="" />
        <div>
          <ContentTextArea>
            안녕하세요. 프론트엔드 신입 개발자 최하영입니다.
          </ContentTextArea>
          <ContentTextArea>
            전공에 흥미를 느끼지 못하던 저는 수업 중 우연히 프로그래밍을 접하게
            되었고, 흔히들 '개발자는 평생 공부해야 한다.' 라는 말을 단점처럼
            얘기하지만, 저는 앞으로도 끊이지 않을 놀라움에 기대하며 유연하게
            흡수하는 개발자가 되고 싶은 마음입니다. :)
          </ContentTextArea>
        </div>
        <LinkContainer>
          <DownloadLink href="">이력서 다운받기</DownloadLink>
          <DownloadLink href="">자기소개서 다운받기</DownloadLink>
          <DownloadLink href="">블로그 이동</DownloadLink>
        </LinkContainer>
      </ContentContainer>
    </Container>
  );
}
const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 581px;
  margin: 0 auto;
  gap: 40px;
`;
const ContentTextArea = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
  b {
    font-weight: 700;
  }
  :first-child {
    font-weight: 700;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const DownloadLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #1d1d1f;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
`;
