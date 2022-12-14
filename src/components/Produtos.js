import React from 'react';
import './Produtos.css';
import Produto from './Produto';
import { useState } from 'react';
import ProdutosLista1 from './ProdutosLista1';
import ProdutosLista2 from './ProdutosLista2';
import ProdutosLista3 from './ProdutosLista3';

/*<button className="button" 
          onClick={()=>setOpt(<ul>
                              <li>oi</li>
                              </ul>)}>botao 1</button>
  <button className="button"
          onClick={()=>setOpt(<ul>
                              <li>oioioi</li>
                              </ul>)}>botao 2</button>
*/
// <span style={{fontSize:'20vw'}}>{opt}</span>

function Produtos() {

  let [opt, setOpt] = useState(<ProdutosLista1/>)

  return (
    <div className='cards' id='produtos'>
      <h1 className="background_produtos">PRODUTOS DIPONÍVEIS</h1>
      <h5 className="background_abas"><button 
        onClick={()=>setOpt(<ProdutosLista1/>)}>Copa do Mundo</button></h5>
      <h5 className="background_abas"><button 
        onClick={()=>setOpt(<ProdutosLista2/>)}>Natal</button></h5>
      <h5 className="background_abas"><button 
        onClick={()=>setOpt(<ProdutosLista3/>)}>Ano Novo</button></h5>
      <div className='cards__container'>
        <div>
        <span>{opt}</span>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
