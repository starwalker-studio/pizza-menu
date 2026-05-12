import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../api/store/cartStore";
import { Button } from "../ui/button/Button";
import style from "./Cart.module.scss";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const {
    updateCantidadItem,
    items,
    getTotal,
    removeIngredienteExtra,
    removeItem,
  } = useCartStore();

  return (
    <>
      <div
        className={`${style.cart_overlay} ${isOpen ? style.open : ""}`}
        onClick={onClose}
      />
      <div className={`${style.cart_drawer} ${isOpen ? style.open : ""}`}>
        <div className={style.cart_header}>
          <h2>Carrito</h2>
          <button className={style.cart_close} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className={style.cart_items}>
          {items.length === 0 ? (
            <p className={style.cart_empty}>No hay productos en el carrito</p>
          ) : (
            items.map((item) => (
              <div className={style.cart_item_card} key={item.id}>
                <div className={style.item_img}>
                  <img src={item.imagen} alt="" />
                </div>
                <div className={style.item_text}>
                  <h2>{item.nombre}</h2>
                  <div className={style.item_details}>
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">tamaño</th>
                          <th scope="col">masa</th>
                          <th scope="col">cantidad</th>
                          <th scope="col">precio</th>
                        </tr>
                      </thead>
                      {item.tamanos.map((t) => (
                        <tbody key={t.tamano}>
                          <tr>
                            <td>{t.tamano}</td>
                            <td>{item.masa}</td>
                            <td className={style.buttons}>
                              <div className={style.item_quantity_buttons}>
                                <button
                                  onClick={() =>
                                    updateCantidadItem(item.id, t.tamano, -1)
                                  }
                                >
                                  -
                                </button>
                                <p>{t.cantidad}</p>
                                <button
                                  onClick={() =>
                                    updateCantidadItem(item.id, t.tamano, 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td>${t.valor * t.cantidad}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  {item.ingredientesExtras.find((i) => i.selected) && (
                    <div className={style.item_ing_extra}>
                      <p>ingredientes extra</p>
                      <div className={style.extra_list}>
                        {item.ingredientesExtras
                          .filter((i) => i.selected)
                          .map((i) => (
                            <ul key={i.nombre}>
                              <li>
                                <button
                                  onClick={() =>
                                    removeIngredienteExtra(item.id, i.nombre)
                                  }
                                >
                                  <FontAwesomeIcon icon={faXmark} />
                                </button>
                                <span>+${i.precio}</span>
                                {i.nombre}
                              </li>
                            </ul>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className={style.item_remove}>
                  <Button
                    label="Eliminar"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            ))
          )}
          <div className={style.cart_total}>
            <p>Total: ${getTotal()}</p>
          </div>
        </div>

        <div className={style.footer_button}>
          <Button variant="secondary" label="Ir a Menú" onClick={onClose} />
          <Button variant="whatsApp" label="Enviar Pedido" />
        </div>
      </div>
    </>
  );
};
