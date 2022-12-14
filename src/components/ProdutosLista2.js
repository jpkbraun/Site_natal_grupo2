import React from 'react';
import './Produtos.css';
import Produto from './Produto';

function ProdutosLista2() {
    return (
            <ul>
              <Produto
                name='Pinheirinho de Natal'
                text='Para deixar você e a sua família no clima do Papai Noel.'
                price='50,00'
              />
              <Produto
                name='Estátua do Papai Noel'
                text='Já que o Natal dura somente 1 dia, por que não ficar com a companhia do velhinho por mais um tempo?'
                price='100,00'
              />
              <Produto
                name='Miniatura do Trenó do Papai Noel'
                text='Veja por si mesmo o veículo de tecnologia avançadíssima que o nosso querido senhorzinho usa no trabalho.'
                price='45,00'
              />
            </ul>
    );
  }
  
  export default ProdutosLista2;
  