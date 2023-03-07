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
            수업 중 접하게 된 프로그래밍에서 흥미를 느꼈던 저는 카투사 복무 중
            시스템의 유지보수를 담당하던 미군을 보고 개발자에 대한 꿈을
            품었습니다. 여러 분야들 중 자주 접하던 웹 페이지를 원하는 대로 만들
            수 있는데에 매력을 느껴 독학하던 중 저는 전문성 있는 공부를 위해
            프론트엔드 부트캠프에서의 강의를 들으며 Javascript 와 React를
            배웠습니다. 기술에 익숙해 진 저는 협업 프로젝트에 참여했고,
            백엔드와의 문제가 발생했습니다. 기존 api 명세서와 다른 구조의
            데이터가 받아져 왔고 그 결과 많은 코드 수정을 거쳐야 했습니다. 이
            후로는 모호한 부분이 있다면 백엔드와 조율하고 소통하며
            완성시켰습니다. 소통 능력의 중요성을 배우고 키울 수 있는 좋은
            경험이였습니다. 현재 저는 다른 프로젝트를 진행하며 함께 일하고 싶은
            개발자가 되기 위한 경험을 쌓는 중입니다.
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
