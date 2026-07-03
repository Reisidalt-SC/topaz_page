import { useState } from "react";
import "./products.scss";
import { img1, img2, img3, img4, img5, img6 } from "../../assets/images";


function Products() {
    return(
        <section id="products" className="products_area">
             <div className="section_title">
                <span>Nossos Produtos</span>
                <div className="title_text">
                    <h1>Sabores que Contam Histórias</h1>
                    <p>Cada produto é criado com amor e dedicação, seguindo receitas passadas através de gerações</p>
                </div>
            </div>

            <div className="products_grid">
                <div className="product_field">
                    <div className="product_img" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="img_buttons">
                            <button className="see_button"><i className="bi bi-eye"></i>Ver</button>
                            <button className="buy_button"><i className="bi bi-cart"></i>Adicionar</button>
                        </div>
                    </div>
                    <div className="product_text">
                        <div className="product_price">
                            <div className="price">
                                <strong>Mel Puro Silvestre</strong>
                                <span>R$ 45,00</span>
                            </div>
                            <p>Mel orgânico coletado de flores silvestres, rico em nutrientes e sabor autêntico</p>
                        </div>
                        <button className="details_button">Ver Detalhes <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className="product_field">
                    <div className="product_img" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="img_buttons">
                            <button className="see_button"><i className="bi bi-eye"></i>Ver</button>
                            <button className="buy_button"><i className="bi bi-cart"></i>Adicionar</button>
                        </div>
                    </div>
                    <div className="product_text">
                        <div className="product_price">
                            <div className="price">
                                <strong>Geleias Artesanais</strong>
                                <span>R$ 32,00</span>
                            </div>
                            <p>Sabores tradicionais como morango, damasco e frutas vermelhas, com baixo açúcar</p>
                        </div>
                        <button className="details_button">Ver Detalhes <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className="product_field">
                    <div className="product_img" style={{ backgroundImage: `url(${img3})` }}>
                        <div className="img_buttons">
                            <button className="see_button"><i className="bi bi-eye"></i>Ver</button>
                            <button className="buy_button"><i className="bi bi-cart"></i>Adicionar</button>
                        </div>
                    </div>
                    <div className="product_text">
                        <div className="product_price">
                            <div className="price">
                                <strong>Mel com Própolis</strong>
                                <span>R$ 58,00</span>
                            </div>
                            <p>Combinação poderosa de mel puro com própolis, ideal para fortalecer a imunidade</p>
                        </div>
                        <button className="details_button">Ver Detalhes <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className="product_field">
                    <div className="product_img" style={{ backgroundImage: `url(${img4})` }}>
                        <div className="img_buttons">
                            <button className="see_button"><i className="bi bi-eye"></i>Ver</button>
                            <button className="buy_button"><i className="bi bi-cart"></i>Adicionar</button>
                        </div>
                    </div>
                    <div className="product_text">
                        <div className="product_price">
                            <div className="price">
                                <strong>Conservas Naturais</strong>
                                <span>R$ 38,00</span>
                            </div>
                            <p>Cebolas, pimentas e vegetais conservados em mel e vinagre artesanal</p>
                        </div>
                        <button className="details_button">Ver Detalhes <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className="product_field">
                    <div className="product_img" style={{ backgroundImage: `url(${img5})` }}>
                        <div className="img_buttons">
                            <button className="see_button"><i className="bi bi-eye"></i>Ver</button>
                            <button className="buy_button"><i className="bi bi-cart"></i>Adicionar</button>
                        </div>
                    </div>
                    <div className="product_text">
                        <div className="product_price">
                            <div className="price">
                                <strong>Mel com Infusões</strong>
                                <span>R$ 52,00</span>
                            </div>
                            <p>Lavanda, gengibre, canela - sabores únicos para experiências especiais</p>
                        </div>
                        <button className="details_button">Ver Detalhes <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
                <div className="product_field">
                    <div className="product_img" style={{ backgroundImage: `url(${img6})` }}>
                        <div className="img_buttons">
                            <button className="see_button"><i className="bi bi-eye"></i>Ver</button>
                            <button className="buy_button"><i className="bi bi-cart"></i>Adicionar</button>
                        </div>
                    </div>
                    <div className="product_text">
                        <div className="product_price">
                            <div className="price">
                                <strong>Kits Presenteáveis</strong>
                                <span>R$ 120,00</span>
                            </div>
                            <p>Caixas especiais com seleção premium de mel e geleias, perfeitas para presente</p>
                        </div>
                        <button className="details_button">Ver Detalhes <i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <button className="see_products">Ver Todos os Produtos <i className="bi bi-arrow-right"></i></button>
        </section>
    )
}

export default Products;