import { useEffect, useState } from "react";
import "./header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);


  // section identifier
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const headerHeight = document.getElementById("header").offsetHeight;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - headerHeight;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="logo">
        <i className="fa-solid fa-hexagon"></i>
        <div className="logo_text">
          <strong>Topaz Farm</strong>
          <span>TRADIÇÃO ARTESANAL</span>
        </div>
      </div>

      <div className="menu_button" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <nav className={`nav_bar ${menuOpen ? "active" : ""}`}>
        <ul className="nav_list">
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home">Início</a>
          </li>
          <li className={activeSection === "products" ? "active" : ""}>
            <a href="#products">Produtos</a>
          </li>
          <li className={activeSection === "process" ? "active" : ""}>
            <a href="#process">Produção</a>
          </li>
          <li className={activeSection === "history" ? "active" : ""}>
            <a href="#history">História</a>
          </li>
          <li className={activeSection === "testimonials" ? "active" : ""}>
            <a href="#testimonials">Depoimentos</a>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <button className="header_order"><a href="#order">Fazer Pedido</a></button>
      </nav>
    </header>
  );
}

export default Header;
