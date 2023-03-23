import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BGAnime from '../components/Homepage/BGAnime';
import ContactMe from '../components/Homepage/ContactMe';
import FAQArea from '../components/Homepage/FAQArea';
import IntroArea from '../components/Homepage/IntroArea';
import ProjectArea from '../components/Homepage/ProjectArea';
import SkillsArea from '../components/Homepage/SkillsArea';
import Spinner from '../components/Spinner';
export default function Homepage() {
  const [spinnerActive, setSpinnerActive] = useState(true);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSpinner = () => {
    setSpinnerActive(false);
  };
  useEffect(() => {
    window.onload = handleSpinner;
  }, []);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSpinnerActive(false);
  //   }, 2500);
  //   timer;
  //   return () => {
  //     timer;
  //   };
  // }, []);
  return (
    <>
      {!params.get('link') && spinnerActive && <Spinner />}
      <BGAnime />
      <IntroArea />
      <ProjectArea />
      <SkillsArea />
      <FAQArea />
      <ContactMe />
    </>
  );
}
