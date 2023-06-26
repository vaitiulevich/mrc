import React, { useEffect, useState } from "react";
import './styles.css'
import logo from '../../assets/logo.svg'

const Footer = () => {

    return (
      <footer className="footer container">
      <h2>ЦЕНТР КОМПЕТЕНЦИЙ МРК</h2>
      <div className="footer-all">
         <div className="footer-content">
      <img src={logo} alt='logo'/>
        <nav className="menu">
         <a>Лаборатория</a>
         <a>Цели</a>
         <a href="https://bytespace.by/">Музей</a>
         <a href="https://mrk-bsuir.by/">МРК</a>
         <a>Тест</a>
        </nav>
        </div>
        <div className="social-net">
         ff
        </div>
      </div>
      </footer>
   );
}

export default Footer;