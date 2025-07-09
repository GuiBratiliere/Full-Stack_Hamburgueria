import React from "react";
import './footer.css';

function Footer() {
  return(
    <footer>
        <section id="footer_itens">
            <div className="Pag_footer"> 
                <h3 className="title_footer">Paginas</h3>
                <ul id="list_footer">
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#menu">CARDÁPIO</a>
                    </li>
                    <li>
                        <a href="">UNIDADE</a>
                    </li>
                </ul>
            </div>
            <div className="Cardapio_footer">
                <h3 className="title_footer">Cardápio</h3>
                <ul id="list_footer">
                    <li>
                        <a href="">Hamburguers</a>
                    </li>
                    <li>
                        <a href="">Combos</a>
                    </li>
                    <li>
                        <a href="">Bebidas</a>
                    </li>
                </ul>
            </div>
            <div className="social_media_button">
                <a href="">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </div>
        </section>
    </footer>
  );
}

export default Footer;