import React from 'react';
import './Produtos.css';
import Produto1 from './Produto1';
import Produto2 from './Produto2';

function ProdutosLista1() {
    return (
      
            <ul>
              <Produto1
                name='Bandeirinhas'
                text='Conjunto de Bandeirinhas.'
                price='12,00'
              />
              <Produto2
                name='Uniforme Seleção'
                text='Uniforme da Seleção.'
                price='70,00'
              />
              <Produto1
                name='Vuvuzela'
                text='Pra fazer aquela barulheira dahora.'
                price='30,00'
              />
              <Produto2
                name='Peruca Colorida'
                text='Peruca nas cores Verde e Amarelo.'
                price='25,00'
              />
              <Produto1
                name='Faixa 100% Jesus'
                text='Faixa utilizada pelo Neymar.'
                price='5,00'
              />
            </ul>
    );
  }
  
  export default ProdutosLista1;
  