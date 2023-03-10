import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import skillList from '../../data/skills';
interface GraphItemProps {
  height: string;
  backgroundColor: string;
  isActive: boolean;
}
export interface Skill {
  skillName: string;
  backgroundColor: string;
  height: string;
  id: number;
}
export default function SkillsArea() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
    { threshold: 0.9 }
  );
  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
  }, []);
  const renderSkills = (i: Skill) => {
    return (
      <ItemContainer key={i.id}>
        <ItemText>{i.skillName}</ItemText>
        <GraphItem
          isActive={active}
          height={i.height}
          backgroundColor={i.backgroundColor}
        ></GraphItem>
      </ItemContainer>
    );
  };
  return (
    <Container>
      <InnerContainer>
        <Title>My Skills</Title>
        <ContentContainer ref={ref}>
          {skillList.map((i) => {
            return renderSkills(i);
          })}
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
}
const Container = styled.div`
  padding: 140px 0;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  display: flex;
  height: 360px;
  gap: 16px;
`;
const Title = styled.p`
  font-size: 80px;
  font-weight: 700;
  width: 100px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-align: center;
  color: #e9e9e9;
`;
const ContentContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Graph = css`
  width: 48px;
  align-self: center;
  border-radius: 10px 10px 0 0;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding: 0 4px;
`;
const GraphItem = styled.div<GraphItemProps>`
  ${Graph}
  height: ${(props) => (props.isActive ? props.height : 0)};
  background: ${(props) => props.backgroundColor};
  transition: 1.5s;
`;
const ItemText = styled.p`
  font-size: 14px;
  font-weight: 700;
  width: 80px;
  height: 44px;
  text-align: center;
`;
