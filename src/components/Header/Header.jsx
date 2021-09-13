import React, {useState} from "react";

import { GoThreeBars } from "react-icons/go";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import { TiArrowLeftThick } from "react-icons/ti";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () =>{
    setMenu(!menu)
  }
  
  const styleMenu = {
    left: menu ? 0 : "-100%"
  }
  return (
    <div className={styles.principal}>
      <header className={styles.header}>
        <div className={styles.toogle} onClick={toggleMenu}>
          <GoThreeBars size="45px" />
        </div>
        <img className={styles.logo} src={logo} alt="" />
        <nav className={styles.menu} style={styleMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/about">Confitería</Link>
            </li>
            
            <li className={styles.menuItem}>
              <Link to="/servicios">Empaques</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/users">Productos</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contactanos">Contactanos</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cartIcon}>
          <Link to="/cart">
            <TiArrowLeftThick size="35px" />
          </Link>
        </div>
      </header>
    </div>
  );
};