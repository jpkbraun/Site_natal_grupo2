import React from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <div className="sobre" id="sobre">
      <div className="sobre-titulo">SOBRE A LOJA</div>
      <p className="sobre-paragrafo">
        A loja DecorHouse é a loja ideal para decorar a sua casa em situações
        festivas. Possuímos decorações para deixar a sua casa com o ambiente que
        desejar, do natal ao ano novo, temos os produtos que precisa para dar
        uma levantada na sua casa.
        <br />
        <br />
        <br />A DecorHouse possui os melhores preços da região, vendendo
        produtos de qualidade pelo melhor preço do mercado.
      </p>
      <div className="small-rect">
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="sobre-rect">
        Neste ano devido à proximidade da Copa do Mundo ao Natal estamos fazendo
        uma promoção futenatalina, com decorações de natal e da copa com até 40%
        de desconto.
      </div>
      <img src="../images/foto-loja.jpg" alt="sobre-img" />
      <p className="sobre-paragrafo-baixo">
        É NA DECORHOUSE QUE VOCÊ ENCONTRA O QUE FAZ A SUA CASA SUA!
      </p>
    </div>
  );
}

export default Sobre;
