import { useState } from "react";
import "./process.scss";


function Process() {
    return(
        <section id="process" className="process_area">
            <div className="section_title">
                <span>Nosso Processo</span>
                <div className="title_text">
                    <h1>Do Campo ao Pote com Amor</h1>
                    <p>Cada etapa do nosso processo é pensada para preservar a qualidade e autenticidade dos nossos produtos</p>
                </div>
            </div>

            <div className="process_grid">
                <div className="process_field">
                    <i className="bi bi-moisture"></i>
                    <div className="process_text">
                        <strong>01</strong>
                        <span>Coleta Responsável</span>
                        <p>Colhemos o mel respeitando o ciclo natural das abelhas e preservando o equilíbrio da colmeia.</p>
                    </div>
                </div>
                <div className="process_field">
                    <i className="bi bi-stars"></i>
                    <div className="process_text">
                        <strong>02</strong>
                        <span>Produção Artesanal</span>
                        <p>Cada lote é preparado manualmente seguindo receitas tradicionais passadas por gerações.</p>
                    </div>
                </div>
                <div className="process_field">
                    <i className="bi bi-award"></i>
                    <div className="process_text">
                        <strong>03</strong>
                        <span>Controle de Qualidade</span>
                        <p>Rigorosa seleção e análise para garantir pureza, sabor e propriedades nutricionais.</p>
                    </div>
                </div>
                <div className="process_field">
                    <i className="bi bi-box-seam"></i>
                    <div className="process_text">
                        <strong>04</strong>
                        <span>Embalagem Cuidadosa</span>
                        <p>Envase artesanal em vidros especiais que preservam todas as características do produto.</p>
                    </div>
                </div>
            </div>

            <hr /><div className="motto"><span>Tradição preservada em cada etapa</span></div><hr />
        </section>
    )
}

export default Process;