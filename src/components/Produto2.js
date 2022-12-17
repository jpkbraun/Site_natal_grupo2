import React from 'react';
import { Link } from 'react-router-dom';

function Produto2(props) {
  return (
    <>
      <li className='produto' style={{background: '#eeeeee'}}>
        <div style={{display:'flex'}}>
          <div className='produto-texto'><p className='produto-nome'><strong>{props.name}</strong><br></br>{props.text}</p></div>
          <div className='produto-preco'>
            <div>R$</div>
            <div>{props.price}</div>
          </div>
        </div>
      </li>
    </>
  );
}
  
export default Produto2;
