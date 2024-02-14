import React, { useEffect } from 'react';
import styled from 'styled-components';
declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.504, 127.089),
      level: 4,
    };
    const map = new window.kakao.maps.Map(container, options);
  }, []);
  return <Map id="map"></Map>;
}
const Map = styled.div`
  width: 480px;
  height: 300px;
  border-radius: 16px;
`;
