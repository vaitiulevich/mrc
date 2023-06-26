import React, { useEffect, useState } from "react";
import './styles.css'
import logo from '../../assets/logo.svg'
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
      <header className="header container">
        <img src={logo} alt='logo'/>
        <nav className="menu">
          <Link to='#lab'>Лаборатория</Link>
          <Link to='#target'>Цели</Link>
         {/* <a></a>
         <a></a> */}
         <a href="https://bytespace.by/">Музей</a>
         {/* <a href="https://mrk-bsuir.by/">МРК</a> */}
         {/* <a>Тест</a> */}
         <Link to='#test'>Тест</Link>
        </nav>
      </header>
   );
}

export default Header;