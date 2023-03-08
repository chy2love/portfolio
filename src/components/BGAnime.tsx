import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { convertToObject } from 'typescript';
interface ContainerProps {
  active: boolean;
}
export default function BGAnime() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(true);
  const handleScroll = () => {
    console.log(window.scrollY);
    window.scrollY === 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDivScroll = () => {
    if (containerRef.current?.scrollTop) {
      const scroll = containerRef.current.scrollTop;
      const idx = Math.ceil(Math.floor((scroll / 1420) * 100) / 2);
      console.log(idx);
      const ctx = canvasRef.current?.getContext('2d');
      const img = new Image();
      img.src = `canvasVideo/canvasVideo${idx.toString().padStart(2, '0')}.png`;
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
      };
    }
  };
  useEffect(() => {
    containerRef.current?.addEventListener('scroll', handleDivScroll);

    return () => {
      containerRef.current?.removeEventListener('scroll', handleDivScroll);
    };
  }, []);
  return (
    <Container active={active} ref={containerRef}>
      <ScrollArea>
        <TextContainer>
          <CanvasArea ref={canvasRef} width="1780" height="1080"></CanvasArea>
          <TextArea>
            Hello!
            <br />
            I'm new Developer
            <br />
            to Front-end world
          </TextArea>
        </TextContainer>
      </ScrollArea>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: ${(props) => (props.active ? 'scroll' : 'hidden')};
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const TextContainer = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
`;
const TextArea = styled.p`
  position: absolute;
  top: 0;
  transform: translate(5vw, 21vh);
  /* transform: translateX(24vw); */
  color: white;
  font-weight: 700;
  font-size: 80px;
`;
const ScrollArea = styled.div`
  height: 300vh;
  background-color: #0b0b0d;
`;
const CanvasArea = styled.canvas`
  position: absolute;
  top: 0px;
  left: calc(50% - 620px);
  max-width: 1240px;
  /* transform: translateY(21vh); */
  /* height: 100vh; */
`;
