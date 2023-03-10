import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [pageScroll, setPageScroll] = useState(false);

  const handleScroll = () => {
    location.pathname.includes('sendMail')
      ? setPageScroll(true)
      : window.scrollY !== 0
      ? setPageScroll(true)
      : setPageScroll(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    location.pathname.includes('sendMail')
      ? setPageScroll(true)
      : setPageScroll(false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <Frame pageScroll={pageScroll}>
      <Container>
        <div>
          <Name
            onClick={() => {
              location.pathname.includes('sendMail')
                ? navigate('/')
                : scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Choi.HY
          </Name>
        </div>
        <div>
          <ProjectButton>프로젝트</ProjectButton>
          <SkillButton>스킬</SkillButton>
          <FAQButton>FAQ</FAQButton>
          <MailButton to="/sendMail">문의하기</MailButton>
        </div>
      </Container>
    </Frame>
  );
}
const Frame = styled.div<{ pageScroll: boolean }>`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d9d9d9;
  backdrop-filter: blur(15px);
  transition: all;
  transition-duration: 300ms;
  ${(props) =>
    props.pageScroll
      ? `
  background-color: rgba(255, 255, 255, 0.3);
  color: #1d1d1f;
  `
      : `
  background-color: transparent;
  color: white;`};
`;
const Container = styled.div`
  display: flex;
  height: 52px;
  padding: 0 20px;
  width: 1020px;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.p`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 21px;
`;
const Button = css`
  color: inherit;
  background-color: transparent;
  border: none;
  height: 30px;
  font-size: 14px;
  padding: 4px 10px;
  cursor: pointer;
  transition: all;
  transition-duration: 300ms;
`;
const ProjectButton = styled.button`
  ${Button}
  &:hover {
    color: #2ed1af;
  }
`;
const SkillButton = styled.button`
  ${Button}
  &:hover {
    color: #7f87ff;
  }
`;
const FAQButton = styled.button`
  ${Button}
  &:hover {
    color: #f65aad;
  }
`;
const changeGradient = keyframes`
    0%{
      background: transparent
    }
    25%{
      opacity: 25%;
    }
    50%{
      opacity: 50%;
    }
    75%{
      opacity: 75%;
    }
    100%{
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
    }
  `;
const MailButton = styled(Link)`
  ${Button}
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 700;
  border: 1px solid #1d1d1f;
  border-color: inherit;
  border-radius: 16px;
  &:hover {
    border: 1px solid transparent;
    color: white;
    animation-name: ${changeGradient};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
    /* background: linear-gradient(
      to right,
      #2ed1af 0%,
      #5598de 19%,
      #7f87ff 40%,
      #eb5ac0 60%,
      #7f87ff 76%,
      #5598de 90%,
      #2ed1af 100%
    ); */
  }
`;
