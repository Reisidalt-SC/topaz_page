import { useState } from "react";
import "./beneficts.scss";
import { img2 } from "../../assets/images";

function Beneficts() {
    return(
        <section className="beneficts_area" style={{ backgroundImage:`url(${img2})` }}>
            <div className="beneficts_container">
                <div className="section_title">
                    <span>Benefícios</span>
                    <div className="title_text">
                        <h1>Natureza que Nutre e Cuida</h1>
                        <p>O mel artesanal não é apenas delicioso - é um superalimento natural repleto de benefícios para sua saúde e bem-estar. Descubra por que nossos produtos fazem diferença na sua vida.</p>
                    </div>
                </div>
                <div className="beneficts_grid">
                    <div className="beneficts_field">
                        <i className="bi bi-heart"></i>
                        <div className="beneficts-text">
                            <strong>Rico em Antioxidantes</strong>
                            <p>O mel natural é uma fonte poderosa de antioxidantes que combatem radicais livres e promovem a saúde celular.</p>
                        </div>
                    </div>
                    <div className="beneficts_field">
                        <i className="bi bi-lightning-charge-fill"></i>
                        <div className="beneficts-text">
                            <strong>Energia Natural</strong>
                            <p>Carboidratos naturais que fornecem energia rápida e sustentável para o seu dia a dia.</p>
                        </div>
                    </div>
                    <div className="beneficts_field">
                        <i className="bi bi-shield-plus"></i>
                        <div className="beneficts-text">
                            <strong>Fortalece Imunidade</strong>
                            <p>Propriedades antibacterianas e antiinflamatórias naturais que ajudam a fortalecer o sistema imunológico.</p>
                        </div>
                    </div>
                    <div className="beneficts_field">
                        <i className="bi bi-brightness-high"></i>
                        <div className="beneficts-text">
                            <strong>Bem-Estar Digestivo</strong>
                            <p>Prebióticos naturais que promovem a saúde intestinal e auxiliam na digestão.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Beneficts;