import { useState } from "react";
import "./contact.scss";


function Contact() {
    return(
        <section id="contact" className="contact_area">
            <div className="contact_infos">
                <div className="section_title">
                    <span><i className="bi bi-bag"></i> Fale Conosco</span>
                    <div className="title_text">
                        <h1>Vamos Conversar?</h1>
                        <p>Estamos sempre prontos para atender você. Entre em contato para dúvidas, pedidos ou parcerias comerciais.</p>
                    </div>
                </div>
                <div className="contacts_grid">
                    <div className="contact_field">
                        <i className="bi bi-envelope-at"></i>
                        <div className="contact_text">
                            <span>E-mail</span>
                            <p>contato@topazhoney.com.br</p>
                        </div>
                    </div>
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
                            <p>Rua das Abelhas, 1985
                                <br />Bairro Jardim Mel
                                <br />São Paulo, SP - 01234-567
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hours">
                    <span><i className="bi bi-clock-history"></i>  Horário de Atendimento</span>
                    <div className="hours_text">
                        <div className="hour_field">
                            <span>Segunda a Sexta:</span>
                            <strong>9h - 18h</strong>
                        </div>
                        <div className="hour_field">
                            <span>Sábados:</span>
                            <strong>9h - 14h</strong>
                        </div>
                        <div className="hour_field">
                            <span>Domingos e Feriados:</span>
                            <strong>Fechado</strong>
                        </div>
                    </div>
                </div>
            </div>
            <form action="" className="contact_form">
                <div className="input_field">
                    <label htmlFor="name">Nome Completo *</label>
                    <input type="text" name="name" placeholder="Seu nome" required />
                </div>
                <div className="input_field">
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" name="email" placeholder="seu@email.com" required />
                </div>
                <div className="input_field">
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" name="phone" placeholder="(11) 99999-9999" required />
                </div>
                <div className="input_field">
                    <label htmlFor="select">Interesse *</label>
                    <select name="select" id="select">
                        <option value="" disabled selected>Qual seu interesse?</option>
                        <option value="">Compras</option>
                        <option value="">Parcerias</option>
                        <option value="">Revenda</option>
                        <option value="">Outros</option>
                    </select>
                </div>
                <div className="input_field">
                    <label htmlFor="phone">Telefone</label>
                    <textarea name="message" id="message" rows={5} placeholder="Como podemos ajudar você?"></textarea>
                </div>
                <button type="submit">Enviar Mensagem  <i className="bi bi-send"></i></button>
            </form>
        </section>
    )
}

export default Contact;