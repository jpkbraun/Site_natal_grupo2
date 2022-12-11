import React from 'react';
import '../../App.css';
import Produtos from '../Produtos';
import Sobre from '../Sobre';
import Banner from '../Banner';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Banner />
      <Produtos />
      <Sobre />
      <Footer />
    </>
  );
}

export default Home;