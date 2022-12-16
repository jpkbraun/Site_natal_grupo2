import React from 'react';
import { Link } from 'react-router-dom';

function Produto2(props) {
  return (
    <>
      <li className='produto' style={{background: '#eeeeee'}}>
        <div>
          <div className='produto-texto'><strong>{props.name}</strong><br></br>{props.text}</div>
          <div className='produto-preco'>R$<br></br>{props.price}</div>
        </div>
      </li>
    </>
  );
}
  
export default Produto2;
