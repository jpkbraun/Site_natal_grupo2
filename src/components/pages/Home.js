import React from 'react';
import '../../App.css';
import Produtos from '../Produtos';
import Sobre from '../Sobre';
import Banner from '../Banner';
import Footer from '../Footer';
import Siga_nos from '../Siga_nos';

function Home() {
  return (
    <>
      <Banner />
      <Produtos />
      <Sobre />
      <Siga_nos />
      <Footer />
    </>
  );
}

export default Home;