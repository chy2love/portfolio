import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
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

  const renderBtnAtHome = () => {
    return (
      <div>
        <ProjectButton to="project" offset={-52} smooth={true}>
          프로젝트
        </ProjectButton>
        <SkillButton to="skills" offset={-52} smooth={true}>
          스킬
        </SkillButton>
        <FAQButton to="faqs" offset={-52} smooth={true}>
          FAQ
        </FAQButton>
        <MailButton to="/sendMail">문의하기</MailButton>
      </div>
    );
  };
  const handleProjectScroll = () => {
    const project = document
      .getElementById('project')
      ?.getBoundingClientRect().top;
    project && window.scrollTo({ top: project - 52, behavior: 'smooth' });
  };
  const handleSkillsScroll = () => {
    const skills = document
      .getElementById('skills')
      ?.getBoundingClientRect().top;
    skills && window.scrollTo({ top: skills - 52, behavior: 'smooth' });
  };
  const handleFaqsScroll = () => {
    const faqs = document.getElementById('faqs')?.getBoundingClientRect().top;
    faqs && window.scrollTo({ top: faqs - 52, behavior: 'smooth' });
  };
  const renderBtnAtSendMail = () => {
    return (
      <div>
        <ProjectLink
          to="/"
          onClick={() => {
            setTimeout(() => {
              handleProjectScroll();
            }, 300);
          }}
        >
          프로젝트
        </ProjectLink>
        <SkillLink
          to="/"
          onClick={() => {
            setTimeout(() => {
              handleSkillsScroll();
            }, 300);
          }}
        >
          스킬
        </SkillLink>
        <FAQLink
          to="/"
          onClick={() => {
            setTimeout(() => {
              handleFaqsScroll();
            }, 300);
          }}
        >
          FAQ
        </FAQLink>
        <MailButton to="/sendMail">문의하기</MailButton>
      </div>
    );
  };
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
        {location.pathname.includes('sendMail')
          ? renderBtnAtSendMail()
          : renderBtnAtHome()}
        {/* <div>
          <ProjectButton to="project" offset={-52} smooth={true}>
            프로젝트
          </ProjectButton>
          <SkillButton to="skills" offset={-52} smooth={true}>
            스킬
          </SkillButton>
          <FAQButton to="faqs" offset={-52} smooth={true}>
            FAQ
          </FAQButton>
          <MailButton to="/sendMail">문의하기</MailButton>
        </div> */}
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
const ProjectButton = styled(ScrollLink)`
  ${Button}
  &:hover {
    color: #2ed1af;
  }
`;
const SkillButton = styled(ScrollLink)`
  ${Button}
  &:hover {
    color: #7f87ff;
  }
`;
const FAQButton = styled(ScrollLink)`
  ${Button}
  &:hover {
    color: #f65aad;
  }
`;
const ProjectLink = styled(Link)`
  ${Button}
  text-decoration: none;
  &:hover {
    color: #2ed1af;
  }
`;
const SkillLink = styled(Link)`
  ${Button}
  text-decoration: none;
  &:hover {
    color: #7f87ff;
  }
`;
const FAQLink = styled(Link)`
  ${Button}
  text-decoration: none;
  &:hover {
    color: #f65aad;
  }
`;

const changeGradient = keyframes`
    0%{
      background-position-x: 0;
    }
 
    100%{
     background-position-x: 200px;
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
    /* animation-name: ${changeGradient};
    animation-duration: 300ms;
    animation-fill-mode: forwards; */
  }
`;
