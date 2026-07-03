import { useState } from "react";
import "./order.scss";


function Order() {

    
    
function addProduct() {
    const [value, setValue] = useState(" ");
}
    
    
    
    return(
        <section id="order" className="order_area">
            <div className="section_title">
                <span><i className="bi bi-bag"></i> Faça seu Pedido</span>
                <div className="title_text">
                    <h1>Peça Direto com a Gente</h1>
                    <p>Monte seu pedido personalizado e receba nossos produtos fresquinhos em casa</p>
                </div>
            </div>
            <form className="order_form" action="">
                <div className="product_add">
                    <div className="add_header">
                        <span><i className="bi bi-bag"></i> Monte seu Pedido</span>
                    </div>
                    <div className="add_select">
                        <select name="select_order" id="select_order" >
                            <option value=""disabled selected>Selecione um produto...</option>
                            <option value="">Mel Puro Silvestre - R$ 45</option>
                            <option value="">Geleias Artesanais - R$ 32</option>
                            <option value="">Mel com Própolis - R$ 58</option>
                            <option value="">Conservas Naturais - R$ 38</option>
                            <option value="">Mel com Infusões - R$ 52</option>
                            <option value="">Kits Presenteáveis - R$ 120</option>
                        </select>
                        <button className="add_selectBtn" onClick={addProduct()}><i className="bi bi-plus"></i></button>
                    </div>
                    <ul className="order_list">
                        <li>
                            <div className="order_resume">
                                <strong>Kits Presenteáveis</strong>
                                <span>R$ 120 x 1 = R$ 120</span>
                            </div>
                            <div className="order_buttons">
                                <button className="order_minus"><i className="bi bi-dash"></i></button>
                                <span id="order_index">1</span>
                                <button id="order_plus"><i className="bi bi-plus"></i></button>
                                <button id="order_delect"><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </li>
                    </ul>
                    <button className="order_addBtn">
                        <span>Total do Pedido:</span>
                        <span id="order_price">R$ 120.00</span>
                    </button>
                </div>
                <div className="order_details">
                    <strong>Dados para Entrega</strong>
                    <div className="input_field">
                        <label htmlFor="name">Nome Completo *</label>
                        <input type="text" name="name" placeholder="Seu nome completo" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" name="email" placeholder="seu@gmail.com" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="phone">Telefone *</label>
                        <input type="tel" name="phone" placeholder="(11) 99999-9999" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="cep">CEP *</label>
                        <input type="text" name="cep" placeholder="00000-000" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="address">Endereço Completo *</label>
                        <input type="text" name="address" placeholder="Rua, número, complemento" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="city">Cidade *</label>
                        <input type="text" name="city" placeholder="Sua cidade" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="state">Estado *</label>
                        <input type="text" name="state" placeholder="MA" required/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="details">Observações</label>
                        <textarea name="details" id="details" rows={5} placeholder="alguma observação sobre o pedido?"></textarea>
                    </div>
                    <button type="submit" id="order_finish">Finalizar Pedido <i className="bi bi-send"></i></button>
                </div>
            </form>
        </section>
    )
}

export default Order;