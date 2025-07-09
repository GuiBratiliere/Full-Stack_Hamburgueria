import React from "react";
import './header.css';
import Scrollspy from 'react-scrollspy';

function Header() {
    
  return(
    <header>
        <nav id="navbar">
            <div id="img_logo">
                <img src="https://img.freepik.com/vetores-premium/modelo-de-logotipo-de-hamburguer_476121-29.jpg?semt=ais_hybrid" alt="" />
            </div>
            <Scrollspy items={["home", "menu", "unidade"]}
                currentClassName="active"
                componentTag="ul"
                className="nav_list"
                
                >
                <li className="nav_item ">
                    <a href="#home">HOME</a>
                </li>
                <li className="nav_item ">
                    <a href="#menu">CARDÁPIO</a>
                </li>
                <li className="nav_item">
                    <a href="#unidade">UNIDADE</a>
                </li>
            </Scrollspy>

            <button className="btn_default">
                Peça aqui
            </button>
            <button className="mobile_btn">
                <i className="fa-solid fa-bars"></i>
            </button>
        </nav>
        <div id="mobile_menu">
            <ul id="mobile_nav_list">
                <li className="nav_item">
                    <a href="#home">HOME</a>
                </li>
                <li className="nav_item">
                    <a href="#menu">CARDÁPIO</a>
                </li>
                <li className="nav_item">
                    <a href="">UNIDADE</a>
                </li>
            </ul>
            <button className="btn_default">
                Peça aqui
            </button>
        </div>
    </header>
  );
}

export default Header;