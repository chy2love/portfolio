import React, { useState } from 'react';
import styled from 'styled-components';
import arrowDownIcon from '../assets/arrowDown.png';
import arrowUpIcon from '../assets/arrowUp.png';
import FAQList from '../data/FAQ';
export interface FAQ {
  no: number;
  title: string;
  description: string;
}
interface CtnDescProps {
  activeNo: number;
  contentNo: number;
}
export default function FAQArea() {
  const [activeNo, setActiveNo] = useState(0);
  const rendering = (i: FAQ) => {
    const handleBtn = () => {
      activeNo === i.no ? setActiveNo(0) : setActiveNo(i.no);
    };
    return (
      <ContentItem activeNo={activeNo} contentNo={i.no}>
        <ContentTextArea>
          <ContentTitle>{i.title}</ContentTitle>
          <ContentDescription activeNo={activeNo} contentNo={i.no}>
            {i.description}
          </ContentDescription>
        </ContentTextArea>
        <MoreBtn onClick={handleBtn}>
          {activeNo === i.no ? 'close' : 'more'}
          <img src={activeNo === i.no ? arrowUpIcon : arrowDownIcon} />
        </MoreBtn>
      </ContentItem>
    );
  };
  return (
    <Container>
      <Header>FAQ</Header>
      <ContentContainer>
        {FAQList.map((i) => {
          return rendering(i);
        })}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 120px 0;
  background-color: #f5f5f7;
`;
const Header = styled.p`
  font-size: 80px;
  font-weight: 700;
  background: linear-gradient(
    90deg,
    #2ca2b4 0%,
    #5598de 25%,
    #0071e3 44.79%,
    #7f87ff 69.27%,
    #f65aad 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  margin-bottom: 32px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 980px;
`;
const ContentItem = styled.div<CtnDescProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  width: 311px;
  border-radius: 16px;
  padding: 24px;
  transition: 1s;
  ${(props) => (props.contentNo === props.activeNo ? '' : `height:204px`)}
`;
const ContentTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ContentTitle = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 22px;
  font-size: 16px;
  font-weight: 700;
`;
const ContentDescription = styled.p<CtnDescProps>`
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;

  ${(props) =>
    props.contentNo !== props.activeNo &&
    `display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  height:66px
  `}
`;
const MoreBtn = styled.button`
  display: flex;
  width: 56px;
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  color: #5598de;
  cursor: pointer;
`;
