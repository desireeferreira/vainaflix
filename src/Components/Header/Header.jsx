import React from "react";
import "./HeaderStyle.scss";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Saiba Mais</li>
        </ul>
      </nav>
    </header>
  );
}

// Liberar o acesso ao componente em outros arquivos
export default Header;
