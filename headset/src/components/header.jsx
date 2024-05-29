import React from "react";

const Header = () => {
  return (
    <div>
      <header class="header" id="header">
        <nav class="navbar container">
          <a href="#" class="brand">
            JBL Original
          </a>
          <div class="burger" id="burger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div>
          <div class="menu" id="menu">
            <ul class="menu-inner">
              <li class="menu-item">
                <a href="#" class="menu-link">
                  Fones de Ouvido
                </a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">
                  Caixas de Som
                </a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">
                  Gamer
                </a>
              </li>
              <li class="menu-item">
                <a href="#" class="menu-link">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
          <a href="#" class="menu-block">
            Suporte
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
