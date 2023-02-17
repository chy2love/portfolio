import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import canvasVideo from '../src/assets/canvasVideo_10s.mp4';
export default function App() {
  const [videoTime, setVideoTime] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctx = canvasRef.current?.getContext('2d');

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const render = () => {
        console.log(video);
        video.currentTime = videoTime;
        // ctx?.drawImage(video, 0, 0, 300, 100);
      };
      render();
      // requestAnimationFrame(render);
    }
  }, [videoTime]);

  const handleScroll = useCallback(() => {
    if (videoRef.current) {
      console.log(
        Math.round((videoRef.current.duration / 1400) * scrollY * 100) / 100
      );
      setVideoTime(
        Math.round((videoRef.current.duration / 1400) * scrollY * 100) / 100
      );
    }
  }, [videoRef.current]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <VideoContainer>
      <Video ref={videoRef} src={canvasVideo} muted></Video>
      {/* <Canvas ref={canvasRef}></Canvas> */}
    </VideoContainer>
  );
}
const VideoContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Video = styled.video`
  /* display: none; */
`;
// const Canvas = styled.canvas`
//   position: fixed;
//   width: 1240px;
//   height: 753px;
// `;
