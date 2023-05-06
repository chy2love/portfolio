import React, { useState, useEffect, Suspense } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  const handleSpinner = () => {
    setTimeout(() => {
      setSpinnerActive(false);
    }, 2500);
  };
  useEffect(() => {
    loaded && handleSpinner();
  }, [loaded]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinnerActive(false);
    }, 3000);
    timer;
    return () => {
      timer;
    };
  }, []);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {!params.get('link') && spinnerActive && <Spinner />}
        <BGAnime />
        <IntroArea />
        <ProjectArea />
        <SkillsArea />
        <FAQArea />
        <ContactMe />
      </Suspense>
    </>
  );
}
