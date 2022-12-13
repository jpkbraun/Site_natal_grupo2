import React from 'react';
import '../App.css';
import './Banner.css';

function Banner() {
  return (
    <div className='banner' id='home'>
      <img src='/images/imagem-sala.png' className='imagem'/>
      <div className='rectangle'></div>
      <h1>Promoção de Natal na DecorHouse!</h1>
    </div>
  );
}

export default Banner;