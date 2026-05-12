import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { opiniones } from "./dummy";
import style from "./Opinions.module.scss";

export const Opinions = () => {
  return (
    <div className={style.info_card}>
      <h3>Lo que dicen nuestros clientes</h3>
      <div className={style.opiniones_list}>
        {opiniones.map((op) => (
          <div className={style.opinion_item} key={op.id}>
            <div className={style.opinion_header}>
              <p className={style.opinion_nombre}>{op.nombre}</p>
              <div className={style.estrellas}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                      i < op.estrellas ? style.star_on : style.star_off
                    }
                  />
                ))}
              </div>
            </div>
            <p className={style.opinion_texto}>{op.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
