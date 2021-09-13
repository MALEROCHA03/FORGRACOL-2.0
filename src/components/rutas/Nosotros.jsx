import React,{Fragment, useState} from 'react';

import Footer from '../footer/footer'
import Cart from '../Cart'
import Burger from '../Burger'


import ETIQUETAS from "../../images/ETIQUETAS.png";
import IMANES from "../../images/IMANES.png";
import STICKERS from "../../images/STICKERS.png";

import AGENDA from "../../images/AGENDA.png";
import LLAVEROS from "../../images/LLAVEROS.png";
import CALENDARIO from "../../images/CALENDARIO.png";
import MUGS from "../../images/MUG.png";
import CAMISETAS from "../../images/CAMISETAS.png";
import BUSOS from "../../images/BUSOS.png";

export const Nosotros = () => {
        const [burgers] = useState([
            {id: 12, image:MUGS,nombre:'Mugs Personalizados', precio: 200000},
            {id: 13, image:CAMISETAS,nombre:'Camisetas Personalizadas', precio: 250000},
            {id: 6, image:BUSOS,nombre:'Busos Personalizados', precio: 350000},
            {id: 2, image:IMANES,nombre:'Imanes Personalizados', precio: 150000},
            {id: 4, image:ETIQUETAS,nombre:'Etiquetas Personalizadas', precio: 100000},
            {id: 5, image:STICKERS,nombre:'Stickers Personalizados', precio: 120000},
           
            {id: 7, image:CALENDARIO,nombre:'Calendarios Personalizados', precio: 400000},
            {id: 8, image:AGENDA,nombre:'Agendas Personalizados', precio: 450000},
            {id: 9, image:LLAVEROS,nombre:'Llaveros Personalizados', precio: 250000},
           
          ])
        //estado del carrito
        
        const [cart, setCart] = useState([]);
      
        return (
            <Fragment>
            {/* SECTION CONTENEDOR GLOBAL */}
            <section className="container">
              {/* SECTION DE LA CABECERA */}
              <section className="container__header">
                {/* BOTON DE LA CABECERA */}
                <div className="container__header__menu">
                  <button className="container__header__menu--button"></button>
                </div>
      
                {/* TITULO DE LA CABECERA */}
                <div className="container__header__title">
                  
                </div>
      
                {/* CART DE LA CABECERA */}
                <div className="container__header__cartDiv">
                  <Cart cart={cart} setCart={setCart} />
                </div>
              </section>
      
              {/* SECTION CONTENEDOR PRINCIPAL */}
              <section className="container__content">
      
                
                
            <div>  
      
         </div>
            
      
            <div className="Productos">
              <h1>CONFITERÍA</h1>
              </div>
          
           
      
                <div className="container__content__listBurgers">
                  {burgers.map((burger) => (
                    <Burger
                      key={burger.id}
                      burger={burger}
                      cart={cart}
                      setCart={setCart}
                      burgers={burgers} />
                  ))}
                </div>
      
              </section>
              <div className="container mt-5">
                    
                     </div>
              {/* SECTION FOOTER */}
             
             <Footer/>
              
              
            </section>
          </Fragment>
          
        );
      }
    
                
