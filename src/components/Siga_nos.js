import React from "react";
import "./Siga_nos.css";

function Siga_nos() {
    return (
        <div className="siga_nos" id="siga_nos">
            <div className="siga_nos-titulo">SIGA-NOS NO INSTAGRAM</div>
            <div>
                <img src="../images/img-copa.jpeg" alt="siga_nos-img" className="img1" />
                <img src="../images/img-pinheiro.jpeg" alt="siga_nos-img" className="img2" />
                <img src="../images/img-espumante.jpeg" alt="siga_nos-img" className="img3" />
                <div className="rect1">DecorHouse a DecorHouse já está em clima de copa do mundo ...</div>
                <div className="rect2">DecorHouse já está pensando em como vai decorar a casa para ...</div>
                <div className="rect3">DecorHouse visite nossas lojas para comprar sua decoração de ...</div>
            </div>
        </div>
    );
}

export default Siga_nos;