import React from 'react'
import ReactWhatsapp from 'react-whatsapp';




const Burger = ({ burger, cart, setCart, burgers }) => {
    const { nombre, image, precio, id } = burger;
    const addBurger = (id) => {
      const burger = burgers.filter((burger) => burger.id === id);
      setCart([...cart, ...burger]);
      
    };
    const deleteBurger = (id) => {
      const burgers = cart.filter((burger) => burger.id !== id);
      setCart(burgers);
    };
    const sendWhatsApp = (id) => {
      <ReactWhatsapp number="57-3196764651" message="Hello World!!!"id />
    };
    
  
    return (
      <ul className="container__content__burgers">
        <img className="container__content__burgers--image" src={image} alt="Imagen"/>
        <li className="container__content__burgers--nombre">{nombre}</li>
        <li className="container__content__burgers--precio">${precio}</li>
        {burgers ? (
          <button
          
            className="container__content__burgers--btnAdd"
            type="button"
            onClick={() => addBurger(id)}
          >
            AÑADIR
          </button>
        ) : (
          <div>
            <button
              className="container__content__burgers--btnDel"
              type="button"
              onClick={() => deleteBurger(id)}
            >
              ELIMINAR
            </button>
            <button
            
              className="container__content__burgers--btnAdd"
              type="button"
              onClick={() => sendWhatsApp(id)}
            >
              CONTINUAR
            </button>
          </div>
        )}
      </ul>
    );
  };
  
  export default Burger;