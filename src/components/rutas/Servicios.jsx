import React,{Fragment, useState} from 'react';
 
import Footer from '../footer/footer'
import Cart from '../Cart'
import Burger from '../Burger'
import CAJA from "../../images/CAJA.png";
import CAJAS1 from "../../images/CAJAS1.png";
import CAJAS2 from "../../images/CAJAS2.png";
import CAJAS3 from "../../images/CAJAS3.png";
import CAJAS4 from "../../images/CAJAS4.png";
import CAJAS5 from "../../images/CAJAS5.png";
import BOLSAS from "../../images/BOLSAS.png";
import PRE from "../../images/PRE.png";
import ALIMENTOS from "../../images/ALIMENTOS.png";

export const Servicios = () => {

    const [burgers] = useState([
        {id: 15, image:CAJAS1, nombre:'Cajas Personalizadas', precio: 400000},
        {id: 16, image:CAJAS2, nombre:'Cajas Personalizadas', precio: 200000},
        {id: 17, image:CAJAS3, nombre:'Cajas Personalizadas', precio: 300000},
        {id: 18, image:CAJAS4, nombre:'Cajas Personalizadas', precio: 250000},
        {id: 19, image:CAJAS5, nombre:'Cajas Personalizadas', precio: 180000},
        {id: 20, image:CAJA, nombre:'Cajas Personalizadas', precio: 400000},
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
          <h1>EMPAQUES</h1>
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

        
 