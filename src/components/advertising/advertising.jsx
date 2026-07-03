import { useState } from "react";
import "./advertising.scss";

function Advertising() {
    return(
        <section className="advertising_area">
            <div className="section_title">
                <span><i className="bi bi-stars"></i></span>
                <div className="title_text">
                    <h1>Sinta o Verdadeiro Sabor da Tradição</h1>
                    <p>Experimente produtos artesanais feitos com amor, cuidado e ingredientes 100% naturais. Leve para sua casa o sabor que atravessa gerações.</p>
                </div>
            </div>
            <div className="advertising_buttons">
                <button className="order"><a href="#order">Fazer Pedido</a> <i className="bi bi-arrow-right"></i></button>
                <button className="contact"><a href="#contact">Fale Conosco</a></button>
            </div>
            <div className="advantages">
                <div className="advantage_field">
                    <i className="bi bi-truck"></i>
                    <span>Entrega em todo Brasil</span>
                </div>
                <div className="advantage_field">
                    <i className="bi bi-box-seam"></i>
                    <span>Embalagem especial</span>
                </div>
                <div className="advantage_field">
                    <i className="bi bi-shield"></i>
                    <span>Satisfação garantida</span>
                </div>
            </div>
           
        </section>
    )
}

export default Advertising;