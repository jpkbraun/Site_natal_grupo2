import React from 'react';
import '../App.css';
import './Banner.css';

function Banner() {
  return (
    <div className='banner' id='home'>
      <video src='/videos/fireplace.mp4' autoPlay loop muted className='fireplace-video'/>
      <h1>Promoção de Natal <br/> da DecorHouse!</h1>
    </div>
  );
}

export default Banner;