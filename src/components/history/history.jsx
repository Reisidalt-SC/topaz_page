import { useState } from "react";
import "./history.scss";
import { img7 } from "../../assets/images";

function History(){
    return(
        <section id="history" className="history_section">
            <div className="img_container">
                <div className="img_field">
                    <img src={img7} alt="history_img" />
                </div>
                <div className="img_strip">
                    <strong>40+</strong>
                    <span>Anos de Tradição</span>
                </div>
            </div>
            <div className="text_container">
                <div className="history_title"><span>Nossa História</span></div>
                <div className="history_text">
                    <h1>Uma Tradição que Atravessa Gerações</h1>
                    <p>A história da Topaz Honey começou em 1985, quando a família Papadopoulos trouxe para o Brasil as tradições ancestrais gregas de produção de mel. O que começou como um pequeno apiário familiar se transformou em uma empresa dedicada a preservar a autenticidade e qualidade do mel artesanal.</p>
                    <p>Hoje, já na terceira geração, continuamos fiéis aos princípios que nos guiaram desde o início: respeito à natureza, dedicação ao artesanal e amor pelo que fazemos. Cada pote que produzimos carrega não apenas mel, mas também memórias, tradição e o carinho de quem trabalha com paixão.</p>               
                </div>
                <div className="history_facts">
                    <div className="facts_field">
                        <i className="bi bi-person-lines-fill"></i>
                        <div className="facts_text">
                            <strong>Família e Tradição</strong>
                            <span>Três gerações dedicadas à arte do mel artesanal</span>
                        </div>
                    </div>
                    <div className="facts_field">
                        <i className="bi bi-bookmark-heart"></i>
                        <div className="facts_text">
                            <strong>Paixão e Cuidado</strong>
                            <span>Cada produto feito com amor e atenção aos detalhes</span>
                        </div>
                    </div>
                    <div className="facts_field">
                        <i className="bi bi-geo-alt"></i>
                        <div className="facts_text">
                            <strong>Raízes Gregas</strong>
                            <span>Técnicas mediterrâneas adaptadas ao terroir brasileiro</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History;