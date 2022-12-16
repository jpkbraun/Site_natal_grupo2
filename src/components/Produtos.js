import React from "react";
import "./Produtos.css";
import { useState } from "react";
import ProdutosLista1 from "./ProdutosLista1";
import ProdutosLista2 from "./ProdutosLista2";
import ProdutosLista3 from "./ProdutosLista3";

function Produtos() {
  let [opt, setOpt] = useState(<ProdutosLista1 />);

  return (
    <div className="produtos-container" id="produtos">
      <h1 className="background_produtos">PRODUTOS DIPONÍVEIS</h1>
      <div className="background_abas">
        <button className="botao" onClick={() => setOpt(<ProdutosLista1 />)}>
          Copa do Mundo
        </button>
        <button className="botao" onClick={() => setOpt(<ProdutosLista2 />)}>
          Natal
        </button>
        <button className="botao" onClick={() => setOpt(<ProdutosLista3 />)}>
          Ano Novo
        </button>
      </div>
      <div className="cards__container">
        <div>
          <span>{opt}</span>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
