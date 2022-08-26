import React from 'react';
import Bar from '../Components/Bar';
import { Link } from 'react-router-dom';
import '../css/Sobre.css';

function Sobre() {
  return (
    <div className="sobrePage">
      <div className="divFixeds">
        <Bar />
      </div>

      <main className="sobreMain">
        <div className="two">
          <h1>
            Sobre mim
            <span>Um breve resumo de quem eu sou...</span>
          </h1>
        </div>

        <div className="texto">
          <p>
            Olá, sou o Luan Nakashima, nasci em Caraguatatuba-SP, aonde morei minha vida toda. Aos
            18, entrei na Trybe e assim comecei a minha carreira profissional como desenvolvedor.
          </p>

          <br />

          <p>Meu principal objetivo hoje, é ser desenvolvedor FrontEnd em São Paulo-Capital.</p>

          <br />

          <p>Amante da matemática, filosofia e história.</p>

          <br />

          <p>Acredito na transformação do mundo através da tecnologia.</p>
          <br />
          <br />
        </div>

        <div className="btnDiv">
          <Link to="/">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Início</span>
            </button>
          </Link>

          <Link to="habilidades">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Habilidades</span>
            </button>
          </Link>

          <Link to="projetos">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Projetos</span>
            </button>
          </Link>
        </div>
      </main>

      <div />
    </div>
  );
}

export default Sobre;
