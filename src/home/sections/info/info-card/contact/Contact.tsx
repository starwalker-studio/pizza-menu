import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={style.info_card}>
      <h3>Contáctanos</h3>
      <ul className={style.contact_list}>
        <li>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Calle Pino 14, Fracc. Los Olivos, PizzaLandia</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <span>444 123 4567</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>dontomate@correo.com</span>
        </li>
      </ul>
    </div>
  );
};
