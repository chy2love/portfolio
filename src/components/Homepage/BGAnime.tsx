import React, { useState, useEffect, useRef, useCallback } from 'react';
import images from './ImageImport';
import styled from 'styled-components';
interface ContainerProps {
  active: boolean;
}
interface BGAProps {
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function BGAnime(props: BGAProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(true);
  const handleScroll = () => {
    window.scrollY === 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    props.setLoaded(true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDivScroll = useCallback(() => {
    if (containerRef.current?.scrollTop) {
      const scroll = containerRef.current.scrollTop;
      const idx = Math.floor(Math.floor((scroll / 2811) * 110) / 2);
      const ctx = canvasRef.current?.getContext('2d');
      const img = new Image();
      img.src = `${images[idx]}`;
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
      };
    }
  }, []);
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
  background-color: #0b0b0d;
  display: flex;
  justify-content: center;
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
  height: 100vh;
  display: flex;
  align-items: flex-end;
`;
const TextArea = styled.p`
  position: absolute;
  top: 0;
  transform: translate(5vw, 21vh);
  /* transform: translateX(24vw); */
  color: white;
  font-weight: 700;
  font-size: 65px;
  line-height: 92.4px;
`;
const ScrollArea = styled.div`
  width: 1240px;
  height: 400vh;
`;
const CanvasArea = styled.canvas`
  left: calc(50% - 620px);
  max-width: 1240px;
  /* transform: translateY(21vh); */
  /* height: 100vh; */
`;
