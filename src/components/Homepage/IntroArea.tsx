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
            1년차 프론트엔드 개발자 최하영입니다.
          </ContentTextArea>
          <ContentTextArea>
            <br />
            지난 1년간 LS산전과 신규개발을 진행하며 애자일 프로세스를 경험하고
            새로운 기능과 변경점에 빠르게 대응하고 유연한 커뮤니케이션을
            했습니다.
            <br />
            <br />
            새로운 기술에 어색함 없이 능동적인 학습을 통해 현업에 빠른 적용이
            가능합니다. <br />
            특정 프레임워크에 국한되지 않고 프로젝트에 사용중인 기술스택에 적응
            가능합니다.
            <br />
            <br />
            프론트엔드는 사용자의 입장에서 개발해야 한다고 생각합니다. 개발을
            진행하며 UI/UX를 고려하며 고민하고 더 나은 방향을 제시하는 능동적인
            개발을 위해 노력합니다. 또한 개인의 역량만큼 팀 단위의 시너지도
            중요하다 생각하여 기획자 및 디자이너와도 적극적인 커뮤니케이션을
            유지하며 협업합니다.
            <br />
            <br />
            많은 정보들을 다양하게 가공하여 보여줘야하는 서비스를 개발하면서
            여러 라이브러리를 활용한 경험이 있습니다. 사용자에게 제공될 여러
            복잡한 기능들에 대하여 예상되는 버그나 성능 저하를 사전에 방지하고
            개발 후 수차례 테스트를 통하여 보다 완벽한 서비스를 완성했습니다.
          </ContentTextArea>
        </div>
        <LinkContainer>
          <DownloadLink
            href={`${process.env.PUBLIC_URL}/새로운 것을 제 것으로 만드는 개발자 최하영입니다..pdf`}
            download="새로운 것을 제 것으로 만드는 개발자 최하영입니다."
          >
            이력서 다운받기
          </DownloadLink>
          {/* <DownloadLink href="">블로그 이동</DownloadLink> */}
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
  font-size: 16px;
  line-height: 26px;
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
  color: black;
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
