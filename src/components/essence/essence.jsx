import { useState } from "react";
import "./essence.scss";


function Essence() {
    return(
        <section className="essence_area">
            <div className="section_title">
                <span>Nossa Essência</span>
                <div className="title_text">
                    <h1>Tradição que Você Pode Saborear</h1>
                    <p>Na Topaz Honey, cada produto é uma celebração da natureza e do trabalho artesanal. Mantemos viva a tradição familiar, unindo sabor autêntico, qualidade superior e respeito ao meio ambiente.</p>
                </div>
            </div>
            <div className="essence_grid">
                <div className="essence_field">
                    <i className="bi bi-leaf"></i>
                    <strong>100% Natural</strong>
                    <span>Ingredientes puros e selecionados, sem aditivos artificiais</span>
                </div>
                <div className="essence_field">
                    <i className="bi bi-award"></i>
                    <strong>Produção Artesanal</strong>
                    <span>Cada lote é preparado com cuidado e dedicação familiar</span>
                </div>
                <div className="essence_field">
                    <i className="bi bi-shield-x"></i>
                    <strong>Sem Conservantes</strong>
                    <span>Preservamos o sabor autêntico sem químicos</span>
                </div>
               <div className="essence_field">
                    <i className="bi bi-stars"></i>
                    <strong>Origem Controlada</strong>
                    <span>Rastreabilidade completa desde a colmeia</span>
                </div>
            </div>
        </section>
    )
}

export default Essence;