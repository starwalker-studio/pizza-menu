import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "../../../components/common/modal/Modal";
import { Button } from "../../../components/ui/button/Button";
import { menu } from "../../../ts/menu";
import type { Pizza } from "../../../ts/menu.interface";
import style from "./Menu.module.scss";

export const Menu = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Pizza>();
  return (
    <>
      <div className={style.menu_section}>
        <div className={style.menu_container}>
          <div className={style.menu_wrapper}>
            <div className={style.menu_content}>
              <div className={style.menu_header}>
                <h2>Menú</h2>
              </div>
              <div className={style.menu_grid_4}>
                {menu.pizzas.map((item) => (
                  <div className={style.pizza_card} key={item.id}>
                    <img src={item.imagen} alt="" />
                    <div className={style.pizza_text}>
                      <h3>{item.nombre}</h3>
                      <p>{item.descripcion}</p>
                      <p data-color="secondary">Ingredientes</p>
                      <ul>
                        {item.ingredientes.map((item) => (
                          <li key={item.nombre}>
                            <span>
                              <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                            {item.nombre}
                          </li>
                        ))}
                      </ul>
                      <div className={style.select_pizza_button}>
                        <Button
                          label="Seleccionar Pizza"
                          variant="outline"
                          onClick={() => {
                            setModal(true);
                            setProduct(item);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        key={product?.id}
        isOpen={modal}
        onClose={() => setModal(false)}
        product={product}
      />
    </>
  );
};
