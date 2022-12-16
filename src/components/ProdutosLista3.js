import React from 'react';
import './Produtos.css';
import Produto1 from './Produto1';
import Produto2 from './Produto2';

function ProdutosLista3() {
    return (
            <ul>
              <Produto1
                name='Fogos de Artificio'
                text='Celebre com sua família e amigos a virada do ano.'
                price='65,00'
              />
              <Produto2
                name='Calendário'
                text='Calendário do ano de 2023 que está chegando logo logo.'
                price='15,00'
              />
              <Produto1
                name='Kit Decoração'
                text='Traz de tudo o que se pode imaginar para realizar uma festinha de fim de ano.'
                price='100,00'
              />
              <Produto2
                name='Toalha de Mesa'
                text='Para te fazer companhia em vários momentos de sua vida.'
                price='25,00'
              />
              <Produto1
                name='Faixa 100% 2023'
                text='Faixa utilizada por VOCÊ, que a guarda a felicidade de estar 1 ano mais próximo do HEXA.'
                price='5,00'
              />
            </ul>
    );
  }
  
  export default ProdutosLista3;
  