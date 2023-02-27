import React from 'react';
import styled from 'styled-components';
import dotIcon from '../assets/dotIcon.png';
export default function IntroArea() {
  return (
    <Container>
      <ContentContainer>
        <img src={dotIcon} alt="" />
        <p>
          안녕하세요. 프론트엔드 신입 개발자 최하영입니다. 여기서부터는 알아서
          적는 자기소개서 어디서 태어났고 적으면 안됨 절대로 심플하게 적으셈
          많이 적지말고 인간의 오아이스도 있는 황금시대를 때까지 이상의 보내는
          그리하였는가? 얼음에 같이 피고, 눈이 풍부하게 설산에서 긴지라
          철환하였는가? 유소년에게서 기관과 가치를 귀는 풀이 운다. 무한한 위하여
          같이, 살았으며, 그들은 얼음과 봄바람이다. 청춘은 실로 황금시대의
          이상의 이상, 우리 아름다우냐? 소리다. 이것은 못할 인간에 심장은 수
          낙원을 우리의 부패뿐이다. 아니한 노래하며 보이는 끓는다. 보이는 바로
          가슴이 하여도 밝은 새 있는 때문이다.
        </p>
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
