import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImg.png';
import phoneFrameImg from '../../assets/phoneFrameImg.png';
export default function ProjectArea() {
  return (
    <Container id="project">
      {/* <FrameContainer>
        <PhoneImg src={phoneFrameImg} alt="" />
        <Notch></Notch>
        <IFrameContent src="https://health-healther-fe.vercel.app/">
          iframe을 지원하지 않는 브라우저 입니다
        </IFrameContent>
      </FrameContainer> */}
      <TextContainer>
        <Project>Project</Project>
        <Title>헬스헬써</Title>
        <Description>
          헬스에 관심이 많아진 요새, 홈짐(집에 운동기구를 두어 운동하는 공간)을
          시간별로 판매하고 다양한 소통을 할 수 있는 커뮤니티 기능까지 갖춘
          헬스계의 당근마켓!
        </Description>
        <DetailContainer>
          <ContentContainer>
            <ContentName>작업기간</ContentName>
            <p>2022년 12월 28일 ~ 2023년 2월 3일 (6주간 진행)</p>
          </ContentContainer>
          <ContentContainer>
            <ContentName>투입인원</ContentName>
            <p>프론트 2명, 백엔드 4명</p>
          </ContentContainer>
          <ContentContainer>
            <ContentName>사용 기술</ContentName>
            <p>React,&nbsp;</p>
            <p>TypeScript,&nbsp;</p>
            <p>Tailwind</p>
          </ContentContainer>
          <ContentContainer>
            <ContentName>깃헙 링크</ContentName>
            <ProjectLink
              href="https://github.com/healthHealther/healthHealtherFE"
              target={'_blank'}
              rel="noopener noreferer nofollow"
            >
              https://github.com/healthHealther
            </ProjectLink>
          </ContentContainer>
          <ContentContainer>
            <ContentName>시연 영상</ContentName>
            <ProjectLink
              href="https://www.youtube.com/watch?v=ZON_avdtfSE"
              target={'_blank'}
              rel="noopener noreferer nofollow"
            >
              https://www.youtube.com
            </ProjectLink>
          </ContentContainer>
        </DetailContainer>
        <div>
          <ContentName>작업내용</ContentName>
          <ListContainer>
            <ListItem>
              메인페이지 (메뉴 바, 캐러샐, 카테고리별 링크, 게시글 미리보기)
            </ListItem>
            <ListItem>
              커뮤니티 페이지 (게시글 및 댓글 CRUD기능, 추천하기, 검색기능)
            </ListItem>
            <ListItem>
              홈짐 예약 페이지 (카테고리별 분류 기능, 글 작성 버튼)
            </ListItem>
            <ListItem>OAuth 소셜 로그인(Kakao,Google)</ListItem>
          </ListContainer>
        </div>
      </TextContainer>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${backgroundImg});
  overflow: hidden;
  background-repeat: no-repeat;
  height: 820px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const FrameContainer = styled.div`
  position: relative;
  width: 420px;
  height: 760px;
`;
const PhoneImg = styled.img`
  width: 100%;
  height: 760px;
`;
const Notch = styled.div`
  &::before {
    content: ' ';
    z-index: 10;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 125px;
    height: 16px;
    background-color: black;
    border-radius: 0 0 8px 8px;
  }
`;
const IFrameContent = styled.iframe`
  position: absolute;
  width: 384px;
  height: 736px;
  left: 18px;
  top: 12px;
  border-radius: 48px;
  &::before {
    width: 10px;
    height: 10px;
    background-color: black;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 10px;
  line-height: 22px;
  padding: 4px;
`;
const Project = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 21px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 21px;
`;
const Description = styled.p`
  font-size: 14px;
  margin-bottom: 21px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
`;
const ContentContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  :nth-child(3) {
    p {
      :nth-child(2) {
        color: #5598de;
      }
      :nth-child(3) {
        color: #2f74c0;
      }
      :nth-child(4) {
        color: #08bd9d;
      }
    }
  }
`;
const ContentName = styled.p`
  font-weight: 700;
  width: 72px;
`;
const ProjectLink = styled.a`
  text-decoration: none;
  color: #08bd9d;
`;
const ListContainer = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 10px;
  padding-top: 10px;
`;
const ListItem = styled.li`
  font-size: 14px;
  line-height: 24px;
`;
