import React,{Fragment, useState} from 'react';
 
import Footer from '../footer/footer'
import Cart from '../Cart'
import Burger from '../Burger'

import CAJA from "../../images/CAJA.png";
import ETIQUETAS from "../../images/ETIQUETAS.png";
import IMANES from "../../images/IMANES.png";
import SELLOS from "../../images/SELLOS.png";
import STICKERS from "../../images/STICKERS.png";
import TARJETAS from "../../images/TARJETAS.png";
import AGENDA from "../../images/AGENDA.png";
import BOLSAS from "../../images/BOLSAS.png";
import LLAVEROS from "../../images/LLAVEROS.png";
import PRE from "../../images/PRE.png";
import CALENDARIO from "../../images/CALENDARIO.png";
import ALIMENTOS from "../../images/ALIMENTOS.png";


 export const Productos= () => {
    const [burgers,setBurgers] = useState([
        {id: 1, image:CAJA, nombre:'Cajas Personalizadas', precio: 300000},
        {id: 2, image:IMANES,nombre:'Imanes Personalizados', precio: 150000},
        {id: 3, image:SELLOS,nombre:'Sellos Personalizados', precio: 80000},
        {id: 4, image:ETIQUETAS,nombre:'Etiquetas Personalizadas', precio: 100000},
        {id: 5, image:STICKERS,nombre:'Stickers Personalizados', precio: 120000},
        {id: 6, image:TARJETAS,nombre:'Tarjetas Personalizadas', precio: 120000},
        {id: 7, image:CALENDARIO,nombre:'Calendarios Personalizados', precio: 400000},
        {id: 8, image:AGENDA,nombre:'Agendas Personalizados', precio: 450000},
        {id: 9, image:LLAVEROS,nombre:'Llaveros Personalizados', precio: 250000},
        {id: 10,image:BOLSAS,nombre:'Bolsas Personalizadas', precio: 180000},
        {id: 11,image:ALIMENTOS, nombre:'Empaque Alimentos', precio: 160000},
        {id: 12,image:PRE, nombre:'Cajas prediseñadas', precio: 100000}
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
              <h3 className="container__header__title--text"></h3>
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
          <h1>PRODUCTOS</h1>
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

        
 