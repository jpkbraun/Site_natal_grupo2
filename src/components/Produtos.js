import React from 'react';
import './Produtos.css';
import Produto from './Produto';

/*<button className="button" 
          onClick={()=>setOpt(<ul>
                              <li>oi</li>
                              </ul>)}>botao 1</button>
  <button className="button"
          onClick={()=>setOpt(<ul>
                              <li>oioioi</li>
                              </ul>)}>botao 2</button>
*/

function Produtos() {
  return (
    <div className='cards' id='produtos'>
      <h1 className="background_produtos">PRODUTOS DIPONÍVEIS</h1>
      <h5 className="background_abas">Copa do Mundo</h5>
      <h5 className="background_abas">Natal</h5>
      <h5 className="background_abas">Ano Novo</h5>
      <div className='cards__container'>
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Produtos;
