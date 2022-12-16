import React from 'react';
import './Produtos.css';
import Produto1 from './Produto1';
import Produto2 from './Produto2';
import { useState } from 'react';
import ProdutosLista1 from './ProdutosLista1';
import ProdutosLista2 from './ProdutosLista2';
import ProdutosLista3 from './ProdutosLista3';

function Produtos() {

  let [opt, setOpt] = useState(<ProdutosLista1/>)
  let [bt1, setBt1] = useState(<strong>Copa do Mundo</strong>)
  let [bt2, setBt2] = useState('Natal')
  let [bt3, setBt3] = useState('Ano Novo')

  return (
    <div className='produtos' id='produtos'>
      <h1 className="background_produtos">PRODUTOS DIPONÍVEIS</h1>
      <h5 className="background_abas"><button className='button' 
        onClick={()=>{setOpt(<ProdutosLista1/>);
        setBt1(<strong>Copa do Mundo</strong>);
        setBt2('Natal');
        setBt3('Ano Novo')}}>{bt1}</button></h5>
      <h5 className="background_abas"><button className='button' 
        onClick={()=>{setOpt(<ProdutosLista2/>);
        setBt1('Copa do Mundo');
        setBt2(<strong>Natal</strong>);
        setBt3('Ano Novo')}}>{bt2}</button></h5>
      <h5 className="background_abas"><button className='button' 
        onClick={()=>{setOpt(<ProdutosLista3/>);
        setBt1('Copa do Mundo');
        setBt2('Natal');
        setBt3(<strong>Ano Novo</strong>)}}>{bt3}</button></h5>
      <div>
        <div>
        <span>{opt}</span>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
