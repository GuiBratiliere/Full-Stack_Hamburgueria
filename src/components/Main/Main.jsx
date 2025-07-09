import React from "react";
import './main.css';

function Main() {
  return (
    <main id="content">
        <section id="home">
            <div className="shape"></div>
            <div id="cta">
                <h1 className="title">
                    O sabor vai até <span>você</span>
                </h1>
                <p className="description">
                    kbdajkdbajsakd jdbakjdb b ab akjsbd ajkbd akjdb ajk dba
                </p>
                <div id="cta_buttons">
                    <a href="#menu" className="btn_default"> Ver Cardapio</a>
                    <a href="tel:+5531995259313" id="phone_button">
                        <button className="btn_default">
                            <i className="fa-solid fa-phone"></i>
                        </button>
                        (31) 99525-9313
                    </a>
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
            </div>
                <div id="banner">
                    <img src="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg"/>
                </div>
            
        </section>
        <section id="menu">
            <h2 className="section_title">Cardápio</h2>
            <h3 className="section_subtitle">Nossos Pratos</h3>
            
            <nav id="menu_pedido">
                <ul id="submenu">
                    <li>
                        <a href="#dishes_burguer">Hamburguers</a>
                    </li>
                    <li>
                        <a href="#dishes_combos">Combos</a>
                    </li>
                    <li>
                        <a href="">Bebidas</a>
                    </li>
                    <li>
                        <a href="">Sobremesa</a>
                    </li>
                </ul>
            </nav>
            <h2 className="title_menu">Hamburguers</h2>
            <div id="dishes_burguer">
                <div className="dish">
                    <div className="dish_heart">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <img src="https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-scaled.jpg" className="dish_image"/>
                    <h3 className="dish_title"> Hamburguer Artesanal </h3>
                    <span className="dish_description">
                        Hmaburguer Artesanal feito com 120g de carne 100% bovina, com tomate, alface e molho especial da casa.
                    </span>
                    <div className="dish_rate">
                        <i className="fa-solid fa-star"></i>
                        <span>(100+)</span>
                    </div>
                    <div className="dish_price">
                        <h4> R$ 29,90 </h4>
                        <button className="btn_default">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
                <div className="dish">
                    <div className="dish_heart">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <img src="https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg" className="dish_image" />
                    <h3 className="dish_title"> Hamburguer Artesanal </h3>
                    <span className="dish_description">
                        Hmaburguer Artesanal feito com 120g de carne 100% bovina, Cheddar, Picles, Cebola e molhos especiais.
                    </span>
                    <div className="dish_rate">
                        <i className="fa-solid fa-star"></i>
                        <span>(100+)</span>
                    </div>
                    <div className="dish_price">
                        <h4> R$ 29,90 </h4>
                        <button className="btn_default">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
                <div className="dish">
                    <div className="dish_heart">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <img src="https://cdn.folhadomate.com/wp-content/uploads/2022/09/hamburguer-artesanal.jpg" className="dish_image"/>
                    <h3 className="dish_title"> Hamburguer Artesanal </h3>
                    <span className="dish_description">
                        Hmaburguer Artesanal feito com 120g de carne 100% bovina, Cheddar, Picles, Cebola e molhos especiais.
                    </span>
                    <div className="dish_rate">
                        <i className="fa-solid fa-star"></i>
                        <span>(100+)</span>
                    </div>
                    <div className="dish_price">
                        <h4> R$ 29,90 </h4>
                        <button className="btn_default">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
            <h2 className="title_menu">Combos</h2>
            <div id="dishes_combos">
                <div className="dish">
                    <div className="dish_heart">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8JPzt4OHkBcDCogDRvBwW5t-YY_HPBYkXA&s" className="dish_image"/>
                    <h3 className="dish_title"> Hamburguer Artesanal </h3>
                    <span className="dish_description">
                        Hmaburguer Artesanal feito com 120g de carne 100% bovina, com tomate, alface e molho especial da casa.
                    </span>
                    <div className="dish_rate">
                        <i className="fa-solid fa-star"></i>
                        <span>(100+)</span>
                    </div>
                    <div className="dish_price">
                        <h4> R$ 29,90 </h4>
                        <button className="btn_default">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
                <div className="dish">
                    <div className="dish_heart">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <img src="https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/8184/643359372b8e647906.webp" className="dish_image"/>
                    <h3 className="dish_title"> Hamburguer Artesanal </h3>
                    <span className="dish_description">
                        Hmaburguer Artesanal feito com 120g de carne 100% bovina, Cheddar, Picles, Cebola e molhos especiais.
                    </span>
                    <div className="dish_rate">
                        <i className="fa-solid fa-star"></i>
                        <span>(100+)</span>
                    </div>
                    <div className="dish_price">
                        <h4> R$ 29,90 </h4>
                        <button className="btn_default">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
                <div className="dish">
                    <div className="dish_heart">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <img src="https://lh3.googleusercontent.com/proxy/vMBZS3n0o8YfGVVIlFX7gPYRpagj3Ulpd6efsiTX9EmmLkusGln16g_jUkqwpdFZAcV0o7yXcaZr9Q6SQGWFO7c50FyYCHtZ53C7Py2eI4F7sFLE8VoEaaU-uR8cgRL5VcJH" className="dish_image"/>
                    <h3 className="dish_title"> Hamburguer Artesanal </h3>
                    <span className="dish_description">
                        Hmaburguer Artesanal feito com 120g de carne 100% bovina, Cheddar, Picles, Cebola e molhos especiais.
                    </span>
                    <div className="dish_rate">
                        <i className="fa-solid fa-star"></i>
                        <span>(100+)</span>
                    </div>
                    <div className="dish_price">
                        <h4> R$ 29,90 </h4>
                        <button className="btn_default">
                            <i className="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}

export default Main;