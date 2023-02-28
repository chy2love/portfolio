import React from 'react';
import BGAnime from '../components/BGAnime';
import ContactMe from '../components/ContactMe';
import FAQArea from '../components/FAQArea';
import IntroArea from '../components/IntroArea';
import ProjectArea from '../components/ProjectArea';
import SkillsArea from '../components/SkillsArea';
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
