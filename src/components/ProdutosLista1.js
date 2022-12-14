import React from 'react';
import './Produtos.css';
import Produto from './Produto';

function ProdutosLista1() {
    return (
      
            <ul>
              <Produto
                name='Bandeirinhas'
                text='Conjunto de Bandeirinhas.'
                price='12,00'
              />
              <Produto
                name='Uniforme Seleção'
                text='Uniforme da Seleção.'
                price='70,00'
              />
              <Produto
                name='Vuvuzela'
                text='Pra fazer aquela barulheira dahora.'
                price='30,00'
              />
              <Produto
                name='Peruca Colorida'
                text='Peruca nas cores Verde e Amarelo.'
                price='25,00'
              />
              <Produto
                name='Faixa 100% Jesus'
                text='Faixa utilizada pelo Neymar.'
                price='5,00'
              />
            </ul>
    );
  }
  
  export default ProdutosLista1;
  