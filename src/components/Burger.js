import React from 'react'


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
          
              <a href = { `https://api.whatsapp.com/send?phone=${573204127360}&text=
        Hola, gracias por comprar en FORGRACOL! La orden es :${nombre} Con un precio de :${precio} La referencia es :${id}`}>
         <button className="container__content__burgers--btnAdd">
          CONTINUAR
        </button>
        </a>
            
            
          </div>
        )}
      </ul>
    );
  };
  
  export default Burger;