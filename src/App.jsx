// Importando os componentes
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./global.scss"; // Arquivo global de estilos

// Função principal do App
function App() {
  return (
    <>
      {/* Renderizando Header e Main */}
      <Header />
      <Main />
    </>
  );
}

export default App;
