import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import canvasVideo from '../src/assets/canvasVideo.mp4';
export default function App() {
  const [videoTime, setVideoTime] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctx = canvasRef.current?.getContext('2d');

  const video = videoRef.current;
  useEffect(() => {
    if (video) {
      console.log('hi');
      video.currentTime = videoTime;
      const render = () => {
        ctx?.drawImage(video, 0, 0, 300, 100);
      };
      requestAnimationFrame(render);
    }
  }, [videoTime]);

  const handleScroll = () => {
    console.log(scrollY);
    setVideoTime(scrollY / 1000);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Video ref={videoRef} src={canvasVideo} muted></Video>
      <Canvas ref={canvasRef}></Canvas>
    </div>
  );
}
const Video = styled.video`
  display: none;
  width: 100vw;
  height: 100vh;
`;
const Canvas = styled.canvas`
  position: fixed;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;
