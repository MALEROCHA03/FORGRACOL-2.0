import React, { Fragment } from "react";

const Formulario = () => {

     return (
          <Fragment>
               
                    <container className="containerForm">
                         <form className="row">
                              <div className="titleForm">
                              <h1>FORMULARIO</h1>
                              </div>
                              <div className="col-md-10">

                                   <input type="text" placeholder="Nombre" className="form-control" name="nombre"></input>

                              </div>
                              <div className="col-md-10">

                                   <input type="text" placeholder="Email" className="form-control" name="Email"></input>

                              </div>

                              <div className="col-md-10">

                                   <input type="text" placeholder="Mensaje" className="form-control1" name="Mensaje"></input>

                              </div>
                              <div className="col-md-7">
                                   <button type="submit" value="Send" className="enviar">ENVIAR</button>
                                   <button type="reset" value="Limpiar formulario" className="enviar">LIMPIAR</button>
                              </div>
                         

                         

                    </form>
               </container>
          </Fragment>
     );
}

export default Formulario;