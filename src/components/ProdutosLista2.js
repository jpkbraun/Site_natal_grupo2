import React from 'react';
import './Produtos.css';
import Produto1 from './Produto1';
import Produto2 from './Produto2';

function ProdutosLista2() {
    return (
            <ul>
              <Produto1
                name='Pinheirinho de Natal'
                text='Para deixar você e a sua família no clima do Papai Noel.'
                price='50,00'
              />
              <Produto2
                name='Estátua do Papai Noel'
                text='Fique com a companhia do velhinho!'
                price='100,00'
              />
              <Produto1
                name='Miniatura do Trenó do Papai Noel'
                text='Conheça o veículo do Papai Noel!'
                price='45,00'
              />
            </ul>
    );
  }
  
  export default ProdutosLista2;
  