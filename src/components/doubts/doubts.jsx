import { useState } from "react";
import "./doubts.scss";

function Doubts() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <section className="doubts_area">
      <div className="section_title">
        <span>
          <i className="bi bi-bag"></i> Perguntas Frequentes
        </span>
        <div className="title_text">
          <h1>Tire Suas Dúvidas</h1>
          <p>
            Reunimos as perguntas mais comuns dos nossos clientes
          </p>
        </div>
      </div>
      <div className="accordions_grid">
        <div className={`accordion ${activeIndex === 0 ? "active" : ""}`}>
          <button id="accordion_button" onClick={() => toggleAccordion(0)}>
            De onde vêm os ingredientes?
            <span>
              <i className="bi bi-caret-down"></i>
            </span>
          </button>
          <div className="accordion_text">
            <p>
              Todos os nossos ingredientes são cuidadosamente selecionados de
              produtores locais e parceiros certificados. O mel é coletado de
              apiários próprios e de pequenos apicultores parceiros que seguem
              práticas sustentáveis. As frutas para geleias são orgânicas e de
              origem rastreada.
            </p>
          </div>
        </div>
        <div className={`accordion ${activeIndex === 1 ? "active" : ""}`}>
          <button id="accordion_button" onClick={() => toggleAccordion(1)}>
            Qual é o prazo de entrega?
            <span>
              <i className="bi bi-caret-down"></i>
            </span>
          </button>
          <div className="accordion_text">
            <p>
              O prazo de entrega varia de acordo com a região. Para capitais e
              regiões metropolitanas, o prazo médio é de 3 a 5 dias úteis. Para
              demais localidades, o prazo pode variar entre 7 a 12 dias úteis.
              Você receberá o código de rastreamento assim que o pedido for
              despachado.
            </p>
          </div>
        </div>
        <div className={`accordion ${activeIndex === 2 ? "active" : ""}`}>
          <button id="accordion_button" onClick={() => toggleAccordion(2)}>
            Vocês trabalham com revenda?
            <span>
              <i className="bi bi-caret-down"></i>
            </span>
          </button>
          <div className="accordion_text">
            <p>
              Sim! Temos um programa especial para revendedores e parceiros
              comerciais. Entre em contato através do nosso formulário
              selecionando a opção "Revenda" ou ligue diretamente para nosso
              telefone para conhecer as condições especiais, quantidades mínimas
              e tabela de preços.
            </p>
          </div>
        </div>
        <div className={`accordion ${activeIndex === 3 ? "active" : ""}`}>
          <button id="accordion_button" onClick={() => toggleAccordion(3)}>
            Os produtos possuem certificação orgânica?
            <span>
              <i className="bi bi-caret-down"></i>
            </span>
          </button>
          <div className="accordion_text">
            <p>
              Sim, nossos produtos principais possuem certificação orgânica e
              seguem rigorosos padrões de qualidade. Trabalhamos com práticas
              sustentáveis e respeitamos o ciclo natural das abelhas e das
              plantas. Todos os certificados podem ser consultados em nosso site
              ou solicitados via e-mail.
            </p>
          </div>
        </div>
      </div>
      <div className="contact_link">
        <span>Não encontrou a resposta que procura?</span>
        <button><a href="#contact">Entre em Contato</a></button>
      </div>
    </section>
  );
}

export default Doubts;
