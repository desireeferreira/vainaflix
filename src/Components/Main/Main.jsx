import React from "react";
import "./MainStyle.scss";

function Main() {
  return (
    <main>
      <h1>Vai na Flix</h1>
      {/*figure serve como um container para agrupar as imagens e só pode ter uma figurecaption por figure*/}
      <figure>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-197d29a0-7a57-4eca-afa9-da1c050c5abe" target="_blank" rel="noopener noreferrer">
          <img src="https://play-lh.googleusercontent.com/yRQBdW5n_y6hTiFAlWGe69dIV4sjiYavCXWFD1eQOGldxKYMnUzqBDThk_BXr1JJ6XJS2w" alt="Enrolados" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-afc32deb-a674-4d4b-a87a-bb2b2bf8ef01" target="_blank" rel="noopener noreferrer">
          <img src="https://comunichaos.wordpress.com/wp-content/uploads/2013/01/brave-poster.jpeg?w=374&h=535" alt="valente" />
        </a>
        <a href="https://www.netflix.com/title/80990668" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/pt/e/e4/Extracurricular_%28s%C3%A9rie_de_televis%C3%A3o%29.png" alt="Extracurricular" />
        </a>
         <a href="https://www.disneyplus.com/pt-br/play/17c48679-d755-4e18-b073-3e8fcb889c96" target="_blank" rel="noopener noreferrer">
          <img src="https://media.fstatic.com/I0GxHkxLsWgQXxkJ8R0NscDIvrY=/322x478/smart/filters:format(webp)/media/movies/covers/2022/02/FLr1zrKVkAoweHc.jpg" alt="Noiva por Vingança" />
        </a>
        <a href="https://www.netflix.com/title/80057281" target="_blank" rel="noopener noreferrer">
          <img src="https://www.europanet.com.br/superposter/images/vejapordentro/107041/107041.jpg" alt="Stranger Fingers" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-f28b825f-c207-406b-923a-67f85e6d90e0" target="_blank" rel="noopener noreferrer">
          <img src="https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0,0,540,810" alt="Luca" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/play/98964414-1cc5-4faf-9c8a-77bbe77e6eea" target="_blank" rel="noopener noreferrer">
          <img src="https://static.wixstatic.com/media/ff9915_60e0a51d8ade4ab2bbc1eaa1dfea6f07~mv2.jpg/v1/fill/w_568,h_842,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ff9915_60e0a51d8ade4ab2bbc1eaa1dfea6f07~mv2.jpg" alt="Invasão Secreta" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-65cbcabe-16e8-48c3-a2e3-ede4c928de02" target="_blank" rel="noopener noreferrer">
          <img src="https://vejasp.abril.com.br/wp-content/uploads/2016/11/poster-malevola.jpeg" alt="Malevola" />
        </a>
        <a href="https://www.disneyplus.com/pt-br/browse/entity-02a00d44-4607-4866-862f-9d260a8dbdca" target="_blank" rel="noopener noreferrer">
          <img src="https://www.papodecinema.com.br/wp-content/uploads/2020/12/20201217-soul-papo-de-cinema-cartaz.jpg" alt="Soul" />
        </a>
      </figure>
    </main>
  );
}
//liberar o acesso a outro componente
export default Main;
