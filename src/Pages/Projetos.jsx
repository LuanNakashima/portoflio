import React from 'react';
import Bar from '../Components/Bar';
import '../css/Projetos.css';
import { Link } from 'react-router-dom';
import weatherImg from '../Images/weatherApp.png';
import mealImg from '../Images/meal.png';
import lolImg from '../Images/lol.png';

function Projetos() {
  return (
    <div className="sobrePage">
      <div className="divFixeds">
        <Bar />
      </div>

      <main className="projetosMain">
        <div className="two">
          <h1>
            Projetos
            <span>Alguns projetos que fiz de cunho pessoal e da Trybe</span>
          </h1>
        </div>

        <div className="projetoDiv">
          <div className="card">
            <h3>WeatherApp</h3>
            <img src={weatherImg} />
            <div className="divBtnSite">
              <a
                href="https://github.com/LuanNakashima/WeatherApp"
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
              <a href="https://weather-app-delta-sage.vercel.app/" target="_blank" rel="noreferrer">
                Site
              </a>
            </div>
          </div>
          <div className="card">
            <h3>RecipesApp</h3>
            <img src={mealImg} />
            <div className="divBtnSite">
              <a
                href="https://github.com/LuanNakashima/app.receitas.trybe"
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
              <a href="https://app-receitas-trybe.vercel.app/" target="_blank" rel="noreferrer">
                Site
              </a>
            </div>
          </div>
          <div className="card">
            <h3>LoL Page</h3>
            <img src={lolImg} />
            <div className="divBtnSite">
              <a href="https://github.com/LuanNakashima/LoLClient" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://lol-client-two.vercel.app/" target="_blank" rel="noreferrer">
                Site
              </a>
            </div>
          </div>
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

export default Projetos;
