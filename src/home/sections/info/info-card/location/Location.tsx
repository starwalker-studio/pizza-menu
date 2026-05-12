import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Location.module.scss";

export const Location = () => {
  return (
    <div className={style.info_card}>
      <h3>Visítanos</h3>
      <div className={style.mapa_placeholder}>
        <FontAwesomeIcon icon={faMapLocation} className={style.mapa_icon} />
        <p>Mapa próximamente</p>
      </div>
      <div className={style.mapa_sitio}>
        <p className={style.mapa_sitio_title}>Mapa del sitio</p>
        <ul>
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#masas">Nuestras masas</a>
          </li>
          <li>
            <a href="#menu">Menú</a>
          </li>
          <li>
            <a href="#info">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
