import React from "react";
import "./Siga_nos.css";

function Siga_nos() {
    return (
        <div className="siga_nos" id="siga_nos">
            <div className="siga_nos-titulo">SIGA-NOS NO INSTAGRAM</div>
            <div>
                <img src="../images/imagem1.png" alt="siga_nos-img" className="img1" />
                <img src="../images/imagem2.png" alt="siga_nos-img" className="img2" />
                <img src="../images/imagem3.png" alt="siga_nos-img" className="img3" />
                <div className="rect1"><b className="rect1b">DecorHouse</b> a DecorHouse já está em clima de copa do mundo ...</div>
                <div className="rect2"><b className="rect1b">DecorHouse</b> já está pensando em como vai decorar a casa para ...</div>
                <div className="rect3"><b className="rect1b">DecorHouse</b> visite nossas lojas para comprar sua decoração de ...</div>
            </div>
        </div>
    );
}

export default Siga_nos;