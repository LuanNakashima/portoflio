import React from 'react';
import { Link } from 'react-router-dom';
import Bar from '../Components/Bar';
import '../css/Home.css';

function Home() {
  return (
    <div className="Div1">
      <div className="divFixeds">
        <Bar />
      </div>

      <main className="titleDiv">
        <h1 id="name" className="title">
          Luan Nakashima
        </h1>
        <h2 id="stack" className="title">
          Desenvolvedor Web Full Stack
        </h2>

        <div className="btnDiv">
          <Link to="/sobre">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Sobre</span>
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

export default Home;
