import React from 'react';
import { Link } from 'react-router-dom';

function Produto1(props) {
  return (
    <>
      <li className='produto'>
        <div>
          <div className='produto-texto'><strong>{props.name}</strong><br></br>{props.text}</div>
          <div className='produto-preco'>R$<br></br>{props.price}</div>
        </div>
      </li>
    </>
  );
}
  
export default Produto1;
