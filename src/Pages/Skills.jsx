import React from 'react';
import { Link } from 'react-router-dom';
import Bar from '../Components/Bar';
import '../css/Skills.css';

function Skills() {
  return (
    <div className="sobrePage">
      <div className="divFixeds">
        <Bar />
      </div>

      <main className="skillsMain">
        <h1 className="sobreH">
          Habilidades
          <span className="spanSkills">Minhas principais tecnologias</span>
        </h1>

        <div className="texto">
          <div className="iconsDiv">
            <div className="sepDiv">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  </div>

                  <div className="flip-box-back">
                    <h2>HTML5</h2>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>CSS</h2>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h3>JavaScript</h3>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>React</h2>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>Redux</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="sepDiv">
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>Docker</h2>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>MySQL</h2>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>Node.js</h2>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h3>TypeScript</h3>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  </div>
                  <div className="flip-box-back">
                    <h2>Python</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

          <Link to="sobre">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Sobre</span>
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

{
  /* <div className="iconsDiv">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
            
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /> 
        </div>
      </main> */
}

export default Skills;
