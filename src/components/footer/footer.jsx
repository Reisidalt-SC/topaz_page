import { useState } from "react";
import "./footer.scss";


function Footer() {
    return(
        <footer className="footer">
            <div className="above_area">
                <div className="left_area">
                    <div className="logo_area">
                        <div className="logo">
                            <i className="fa-solid fa-hexagon"></i>
                            <div className="logo_text">
                                <strong>Topaz Farm</strong>
                                <span>TRADIÇÃO ARTESANAL</span>
                            </div>
                        </div>
                        <p>Produzindo mel artesanal e produtos naturais desde
                            <br />1985, com amor, tradição e respeito à natureza.
                        </p>
                        <div className="social_grid">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-envelope"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                    <div className="fast_links">
                        <span>Links Rápidos</span>
                        <ul>
                           <li><a href="">Início</a></li>
                           <li><a href="">Produtos</a></li>
                           <li><a href="">Galeria</a></li>
                           <li><a href="">Nossa História</a></li>
                           <li><a href="">Benefícios</a></li>
                           <li><a href="">Pedidos</a></li>
                           <li><a href="">Contato</a></li> 
                        </ul>
                    </div>
                </div>
                <div className="right_area">
                    <div className="products_links">
                        <span>Produtos</span>
                        <ul>
                            <li><a href="">Mel Puro Silvestre</a></li>
                            <li><a href="">Geleias Artesanais</a></li>
                            <li><a href="">Mel com Própolis</a></li>
                            <li><a href="">Conservas Naturais</a></li>
                            <li><a href="">Mel com Infusões</a></li>
                            <li><a href="">Kits Presenteáveis</a></li>
                        </ul>
                    </div>
                    <div className="contact_info">
                        <span>Contato</span>
                        <div className="contact_field">
                            <i className="bi bi-telephone"></i>
                            <div className="contact_text">
                                <span>Telefone</span>
                                <p>(11) 4002-8922</p>
                            </div>
                        </div>
                        <div className="contact_field">
                            <i className="bi bi-geo-alt"></i>
                            <div className="contact_text">
                                <span>Endereço</span>
                                <p>Rua das Abelhas, 1985 Jardim Mel
                                    <br />São Paulo, SP
                                </p>
                            </div>
                        </div>
                        <div className="contact_field">
                            <i className="bi bi-envelope"></i>
                            <div className="contact_text">
                                <span>E-mail</span>
                                <p>contato@topazhoney.com.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bellow_area">
                <span>© 2026 Topaz Honey. Todos os direitos reservados.</span>
                <ul>
                    <li><a href="">Política de Privacidade</a></li>
                    <li><a href="">Termos de Uso</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
