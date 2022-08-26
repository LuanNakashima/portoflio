import React, { useState } from 'react';
import curriculo from '../Files/curriculum.pdf';
import '../css/Bar.css';

function Bar() {
  const [copiedEmail, SetCopiedEmail] = useState(false);
  const [copiedPhone, SetCopiedPhone] = useState(false);

  const CopyEmail = () => {
    navigator.clipboard.writeText('luan.nakashima@gmail.com');
    SetCopiedEmail(true);
    if (copiedPhone) {
      SetCopiedPhone(false);
    }
  };

  const CopyPhone = () => {
    navigator.clipboard.writeText('12974053756');
    SetCopiedPhone(true);
    if (copiedEmail) {
      SetCopiedEmail(false);
    }
  };

  return (
    <div className="divBar">
      <ul className="listaFixa">
        <a
          className="liFixa"
          id="linkedinFixa"
          href="https://www.linkedin.com/in/luan-nakashima/"
          target="_blank"
          rel="noreferrer">
          <p>Linkedin</p>

          <img
            className="linkedinImgFixa"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="linkedin"
          />
        </a>

        <a
          className="liFixa"
          id="gitHubFixa"
          href="https://github.com/LuanNakashima"
          target="_blank"
          rel="noreferrer">
          <p>GitHub</p>

          <img
            className="gitHubImgFixa"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="gitHub"
          />
        </a>

        <li className="liFixa" id="gmailFixa" onClick={CopyEmail}>
          <p>{copiedEmail ? 'Copiado :)' : 'Copiar'}</p>

          <img
            className="gmailImgFixa"
            src="https://imagepng.org/wp-content/uploads/2018/03/gmail-cone-icon.png"
            alt="gmail"
          />
        </li>

        <li className="liFixa" id="phoneFixa" onClick={CopyPhone}>
          <p>{copiedPhone ? 'Copiado :)' : 'Copiar'}</p>

          <img
            className="phoneImgFixa"
            src="https://cdn.iconscout.com/icon/free/png-64/phone-1568-470312.png"
            alt="phone"
          />
        </li>

        <a className="liFixa" id="gitHubFixa" href={curriculo} target="_blank" rel="noreferrer">
          <p>Currículo</p>

          <img
            className="gitHubImgFixa"
            src="https://cdn-icons-png.flaticon.com/128/817/817886.png"
            alt="gitHub"
          />
        </a>
      </ul>
    </div>
  );
}

export default Bar;
