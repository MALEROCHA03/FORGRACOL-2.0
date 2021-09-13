
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
//import Cards from './components/Cards/Cards';
import { Header } from './components/Header/Header';
import { contactanos } from './components/rutas/contactanos';
import { Home } from './components/rutas/Home';
import { Servicios } from './components/rutas/Servicios';
import { Nosotros } from './components/rutas/Nosotros';
import { Productos } from './components/rutas/Productos';
function App() {
return (
    <Router>
      <div>
        

        <Header/>
        <Switch>
          <Route path="/about" component={Nosotros}/>
          <Route path="/contactanos" component={contactanos}/>
          <Route path="/users" component={Productos}/>
          <Route path="/servicios"component={Servicios}/>
          <Route path="/home" component={Home}/>
            <Home />
         

        </Switch>
      </div>
    </Router>
    
  );
}




export default App;
