import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as KakaoIcon } from '../assets/kakaoIcon.svg';
import { ReactComponent as BlogIcon } from '../assets/blogIcon.svg';
import { ReactComponent as GitIcon } from '../assets/gitIcon.svg';
export default function Footer() {
  const location = useLocation();
  const [isSendMail, setIsSendMail] = useState(false);
  useEffect(() => {
    location.pathname.includes('sendMail')
      ? setIsSendMail(true)
      : setIsSendMail(false);
  }, [location]);
  const [gitHover, setGitHover] = useState(false);
  const [blogHover, setBlogHover] = useState(false);
  const [kakaoHover, setKakaoHover] = useState(false);
  return (
    <OuterFrame isSendMail={isSendMail}>
      <Container isSendMail={isSendMail}>
        <ContentContainer>
          <div>
            <ContentFirstRow>
              <p>
                최하영 | 서울특별시 송파구 삼전동 | tel: 010-6408-9889 |
                email:&nbsp;
              </p>
              <a
                href="mailto:chlgkduddlek@gmail.com"
                target={'_blank'}
                rel="noopener noreferer nofollow"
              >
                chlgkduddlek@gmail.com
              </a>
            </ContentFirstRow>
            <ContentSecondRow>
              <p>blog:&nbsp;</p>
              <a href="" target={'_blank'} rel="noopener noreferer nofollow">
                블로그 링크 써야함
              </a>
            </ContentSecondRow>
          </div>
          <ContentThirdRow>
            <p>
              Copyright &copy; 2023. Web Front-end developer porfolio - by Choi
              ✌ | Design by&nbsp;
            </p>
            <a
              href="http://bbosongbbosong.com/portfolio/#/"
              target={'_blank'}
              rel="noopener noreferer nofollow"
            >
              bbosong-hee
            </a>
          </ContentThirdRow>
        </ContentContainer>
        <IconContainer>
          <a href="" target={'_blank'} rel="noopener noreferer nofollow">
            <GitIcon
              onMouseOver={() => {
                setGitHover(true);
              }}
              onMouseOut={() => {
                setGitHover(false);
              }}
              style={{ transitionDuration: '500ms' }}
              fill={gitHover ? '#f05600' : isSendMail ? '#a5a5a5' : 'white'}
            />
          </a>
          <a href="" target={'_blank'} rel="noopener noreferer nofollow">
            <BlogIcon
              onMouseOver={() => {
                setBlogHover(true);
              }}
              onMouseOut={() => {
                setBlogHover(false);
              }}
              style={{ transitionDuration: '500ms' }}
              fill={blogHover ? '#00990f' : isSendMail ? '#a5a5a5' : 'white'}
            />
          </a>
          <a href="" target={'_blank'} rel="noopener noreferer nofollow">
            <KakaoIcon
              onMouseOver={() => {
                setKakaoHover(true);
              }}
              onMouseOut={() => {
                setKakaoHover(false);
              }}
              style={{ transitionDuration: '500ms' }}
              fill={kakaoHover ? '#f0bb00' : isSendMail ? '#a5a5a5' : 'white'}
            />
          </a>
        </IconContainer>
      </Container>
    </OuterFrame>
  );
}
interface ContainerProps {
  isSendMail: boolean;
}
const OuterFrame = styled.div<ContainerProps>`
  /* position: fixed; */
  display: flex;
  justify-content: center;
  height: 134px;
  width: 100%;
  bottom: 0;
  padding: 24px 20px;
  border-top: 1px solid #888888;
  background-color: ${(props) => (props.isSendMail ? 'white' : '#52525f')};
`;
const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1020px;
  ${(props) =>
    props.isSendMail
      ? `
  color: #a5a5a5;`
      : `
  color: white;`}
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContentStyle = css`
  display: flex;
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: #a4c8ff;
  }
`;
const ContentFirstRow = styled.div`
  ${ContentStyle}
`;
const ContentSecondRow = styled.div`
  ${ContentStyle}
`;
const ContentThirdRow = styled.div`
  ${ContentStyle}
`;
const IconContainer = styled.div`
  display: flex;
  gap: 12px;
`;
