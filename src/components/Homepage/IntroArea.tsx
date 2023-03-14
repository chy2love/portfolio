import React from 'react';
import styled, { keyframes } from 'styled-components';
import dotIcon from '../../assets/dotIcon.png';
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
            수업 중 접하게 된 프로그래밍에서 흥미를 느꼈었는데 카투사 복무 중
            시스템의 유지보수를 담당하던 미군을 보고 개발자에 대한 꿈을
            품었습니다. 자주 접하던 웹 페이지를 원하는 대로 만들 수 있는 점에
            매력을 느껴 마크업을 독학하던 중 전문적으로 배우고 싶어 프론트엔드
            부트캠프로 강의를 들으면서 Javascript 와 React를 배웠습니다. 그 후로
            저는 협업 프로젝트에 참여했습니다. 프로젝트 진행 중 백엔드에서 기존
            api 명세서와 다른 구조의 데이터가 받아지는 문제가 있었고 많은 코드
            수정을 거치는 과정이 있었습니다. 커뮤니케이션의 중요성을 깨닫고
            모호한 부분이 있다면 백엔드와 조율하고 소통하며 프로젝트를
            완성시키며 이 과정을 통해 소통 능력의 중요성을 배우고 키울 수
            있었습니다. 저는 함께 일하고 싶은 개발자가 되기 위해 새로운 협업
            프로젝트를 진행중이고, 자기 개발을 위한 블로그를 운영하며 공부하고
            있습니다. 저는 새로운 기술을 습득할 때 설레고 재미있습니다. 이처럼
            언제나 적극적인 자세로 다가가며, 동료들과 함께 발전하는 개발자가
            되겠습니다. 잘 부탁드립니다.
          </ContentTextArea>
        </div>
        <LinkContainer>
          <DownloadLink href="">이력서 다운받기</DownloadLink>
          <DownloadLink href="">블로그 이동</DownloadLink>
        </LinkContainer>
      </ContentContainer>
    </Container>
  );
}
const changeGradient = keyframes`
    0%{
      background-position-x: 0;
    }
 
    100%{
     background-position-x: 200px;
    }
  `;
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
  &:hover {
    border: 1px solid transparent;
    color: white;

    background: linear-gradient(
      to right,
      #2ed1af 0%,
      #5598de 19%,
      #7f87ff 40%,
      #eb5ac0 60%,
      #7f87ff 76%,
      #5598de 90%,
      #2ed1af 100%
    );
    background-size: 200px 100%;
    animation: ${changeGradient} 1.5s linear infinite;
  }
`;
