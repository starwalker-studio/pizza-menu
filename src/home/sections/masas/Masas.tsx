import { menu } from "../../../ts/menu";
import style from "./Masas.module.scss";

export const Masas = () => {
  return (
    <div className={style.mss_section}>
      <div className={style.mss_container}>
        <div className={style.mss_wrapper}>
          <div className={style.mss_content}>
            <div className={style.mss_header}>
              <h2>Nuestras Masas</h2>
            </div>
            <div className={style.mss_grid_4}>
              {menu.masas.map((item) => (
                <div className={style.mss_card} key={item.id}>
                  <h3>{item.tipo}</h3>
                  <img src={item.img} alt="" />
                  <p>{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
