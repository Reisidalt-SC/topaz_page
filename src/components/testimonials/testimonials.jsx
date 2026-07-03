import { useState } from "react";
import "./testimonials.scss";

function Testimonials() {
    return(
        <section id="testimonials" className="testimonials_area">
            <div className="section_title">
                <span>Depoimentos</span>
                <div className="title_text">
                    <h1>O Que Nossos Clientes Dizem</h1>
                    <p>A satisfação de cada cliente é o nosso maior orgulho</p>
                </div>
            </div>
            <div className="testimonials_grid">
                <div className="testimonials_field">
                    <div className="stars_field">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="quote_mark">
                            <i className="bi bi-chat-left-quote"></i>
                        </div>
                    </div>
                    <p>
                        "O mel da Topaz Honey é simplesmente excepcional! 
                        Você sente a diferença de um produto realmente artesanal. 
                        Compro há anos e nunca me decepcionei."
                    </p>
                    <div className="testimonial_perfil">
                        <i className="bi bi-person-circle"></i>
                        <div className="perfil_text">
                            <span>Maria Helena Silva</span>
                            <span>São Paulo, SP</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials_field">
                    <div className="stars_field">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="quote_mark">
                            <i className="bi bi-chat-left-quote"></i>
                        </div>
                    </div>
                    <p>
                        "As geleias são deliciosas e sem aquele excesso de açúcar. 
                        Perfeito para o café da manhã. A qualidade é visível em cada detalhe."
                    </p>
                    <div className="testimonial_perfil">
                        <i className="bi bi-person-circle"></i>
                        <div className="perfil_text">
                            <span>Carlos Mendes</span>
                            <span>Rio de Janeiro, RJ</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials_field">
                    <div className="stars_field">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="quote_mark">
                            <i className="bi bi-chat-left-quote"></i>
                        </div>
                    </div>
                    <p>
                       "Comprei um kit presenteável para minha mãe e ela adorou! 
                       A embalagem é linda e o sabor do mel com própolis é maravilhoso. Super recomendo!"
                    </p>
                    <div className="testimonial_perfil">
                        <i className="bi bi-person-circle"></i>
                        <div className="perfil_text">
                            <span>Ana Paula Costa</span>
                            <span>Belo Horizonte, MG</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials_field">
                    <div className="stars_field">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                        <div className="quote_mark">
                            <i className="bi bi-chat-left-quote"></i>
                        </div>
                    </div>
                    <p>
                        "Produto de primeira qualidade! 
                        Nota-se o cuidado artesanal em cada detalhe. O mel com infusão de gengibre é o meu favorito."
                    </p>
                    <div className="testimonial_perfil">
                        <i className="bi bi-person-circle"></i>
                        <div className="perfil_text">
                            <span>Roberto Santos</span>
                            <span>Curitiba, PR</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials_field">
                    <div className="stars_field">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="quote_mark">
                            <i className="bi bi-chat-left-quote"></i>
                        </div>
                    </div>
                    <p>
                        "Sou cliente há 5 anos e posso afirmar: 
                        não existe mel melhor! Além disso, o atendimento da família é sempre impecável e carinhoso."
                    </p>
                    <div className="testimonial_perfil">
                        <i className="bi bi-person-circle"></i>
                        <div className="perfil_text">
                            <span>Juliana Oliveira</span>
                            <span>Porto Alegre, RS</span>
                        </div>
                    </div>
                </div>
                <div className="testimonials_field">
                    <div className="stars_field">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                        <div className="quote_mark">
                            <i className="bi bi-chat-left-quote"></i>
                        </div>
                    </div>
                    <p>
                        "Qualidade excepcional! 
                        As conservas naturais são perfeitas para acompanhamentos. Você percebe que é feito com ingredientes de verdade."
                    </p>
                    <div className="testimonial_perfil">
                        <i className="bi bi-person-circle"></i>
                        <div className="perfil_text">
                            <span>Fernando Alves</span>
                            <span>Brasília, DF</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="classification">
                <i className="bi bi-star-fill"></i>
                <span>4.9/5.0</span>
                <i className="bi bi-star-fill"></i>
            </div>
        </section>
    )
}

export default Testimonials; 
