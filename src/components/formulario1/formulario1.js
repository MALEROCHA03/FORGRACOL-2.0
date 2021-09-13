import React, { Fragment, useState } from "react";

const Formulario1 = () => {

     return (
          <Fragment>
               
                    <container className="containerForm1">
                         <form className="row1">
                              <div className="titleForm1">
                              <h1>FORMULARIO</h1>
                              </div>
                              <div className="col-md-10">

                                   <input type="text" placeholder="Nombre" className="form-control3" name="nombre"></input>

                              </div>
                              <div className="col-md-10">

                                   <input type="text" placeholder="Email" className="form-control3" name="Email"></input>

                              </div>

                              <div className="col-md-10">

                                   <input type="text" placeholder="Mensaje" className="form-control4" name="Mensaje"></input>

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

export default Formulario1;