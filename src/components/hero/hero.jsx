import { useState } from "react";
import "./hero.scss";
import honeyJars from "../../assets/images/honey_jars.png";

function Hero(){
    return(
        <section id="home" className="hero">
        <div className="left_area">
            <div className="since">
                <i className="bi bi-stars"></i>
                <span>Produção Familiar desde 1985</span>
                <i className="bi bi-stars"></i>
            </div>

            <div className="hero_text">
                <h1>Da Nossa Colmeia para a Sua Mesa</h1>
                <p>Produzimos mel puro, geleias artesanais e conservas naturais com ingredientes selecionados, seguindo receitas familiares e respeitando a natureza em cada etapa.</p>
            </div>
            <div className="hero_buttons">
                <button id="hero_products">Ver Produtos</button>
                <button id="hero_history">Nossa História</button>
            </div>
        </div>
        <div className="right_area">
            <div className="image_container">
                <img src={honeyJars} alt="hero img" />
            </div>
            <div className="hero_informations">
                <div className="information_field">
                    <strong>100%</strong>
                    <span>Natural</span>
                </div>
                <div className="information_field">
                    <strong>40+</strong>
                    <span>Anos</span>
                </div>
                <div className="information_field">
                    <strong>5000+</strong>
                    <span>Clientes</span>
                </div>
            </div>
        </div>
    </section>
    )  
}

export default Hero;