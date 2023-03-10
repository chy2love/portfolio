import React from 'react';
import BGAnime from '../components/Homepage/BGAnime';
import ContactMe from '../components/Homepage/ContactMe';
import FAQArea from '../components/Homepage/FAQArea';
import IntroArea from '../components/Homepage/IntroArea';
import ProjectArea from '../components/Homepage/ProjectArea';
import SkillsArea from '../components/Homepage/SkillsArea';
export default function Homepage() {
  return (
    <>
      <BGAnime />
      <IntroArea />
      <ProjectArea />
      <SkillsArea />
      <FAQArea />
      <ContactMe />
    </>
  );
}
