import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from "../assets/fone.jpg";

const Banner = () => {
  return (
    <div>
      <main class="main">
        <section class="section banner banner-section">
          <div class="container banner-column">
            <img className="banner-image" src={Image} />
            <div class="banner-inner">
              <h1 class="heading-xl">Fone de Ouvido JBL Bluetooth </h1>
              <p class="paragraph">
                Os fones de ouvido JBL TUNE500BT deixam você ouvir um som
                potente sem fio por até 16 horas de puro prazer. Fácil de usar e
                equipados com drivers JBL de 32 mm e som JBL Pure Bass, esses
                fones de ouvido proporcionam acesso a um ótimo som sempre.
              </p>
              <button class="btn btn-darken btn-inline">
                R$ 142,56<i class="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div class="banner-links">
              <a href="#" title="Vamos Conversar?">
                <FontAwesomeIcon className="iconRedes" icon={faWhatsapp} />
              </a>
              <a href="#" title="Visualizar Github">
                <FontAwesomeIcon className="iconRedes" icon={faGithub} />
              </a>
              <a href="#" title="Ver Linkedin">
                <FontAwesomeIcon className="iconRedes" icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Banner;
