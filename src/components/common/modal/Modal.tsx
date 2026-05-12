import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../../api/store/cartStore";
import { useModal } from "../../../hooks/useModal";
import type { Masa, Pizza } from "../../../ts/menu.interface";
import { Button } from "../../ui/button/Button";
import style from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product?: Pizza | undefined;
};

export const Modal = ({ isOpen, onClose, product }: ModalProps) => {
  const {
    toggleIngredientes,
    togglePrecios,
    setMasaSeleccionada,
    updateCantidad,
    precioTotal,
    masaSeleccionada,
    ingredientes,
    precios,
  } = useModal(product);
  const { addItem, calcularPrecioTotal } = useCartStore();
  if (!isOpen || !product) return null;
  const handleAgregar = () => {
    const extras = ingredientes.filter((ing) => ing.selected && ing.esExtra);

    addItem({
      id: product.id,
      nombre: product.nombre,
      imagen: product.imagen,
      masa: masaSeleccionada,
      tamanos: precios.filter((t) => t.selected === true),
      ingredientesExtras: ingredientes.filter((t) => t.selected === true),
      precioBase: 0,
      precioTotal: calcularPrecioTotal(precios, extras),
    });
    onClose();
  };

  return (
    <div className={style.modal_overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <button className={style.modal_close} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className={style.modal_img}>
          <img src={product.imagen} alt="" />
        </div>

        <div className={style.modal_body}>
          <h2 className={style.modal_title}>{product.nombre}</h2>
          <p className={style.modal_description}>{product.descripcion}</p>
          <div className={style.grid_2}>
            <div className={style.grid_content}>
              <ul className={style.modal_checkbox}>
                <p>{`Ingrediente Extra: (opcional)`}</p>
                {ingredientes.map((item) => (
                  <li key={item.nombre}>
                    <label className={style.checkbox_container}>
                      <span>extra</span>
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleIngredientes(item.nombre)}
                      />
                      {item.nombre}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.grid_content}>
              <ul className={style.modal_checkbox}>
                <p>{`Precios:`}</p>
                {precios.map((item) => (
                  <li key={item.tamano}>
                    <div className={style.modal_quantity_buttons}>
                      <button onClick={() => updateCantidad(item.tamano, -1)}>
                        -
                      </button>
                      <p>{item.cantidad}</p>
                      <button onClick={() => updateCantidad(item.tamano, 1)}>
                        +
                      </button>
                    </div>
                    <label className={style.checkbox_container}>
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => togglePrecios(item.tamano)}
                      />
                      <span>{item.tamano}</span>${item.valor}
                    </label>
                  </li>
                ))}
              </ul>
              <div className={style.masa_select}>
                <p>Masa:</p>
                <select
                  value={masaSeleccionada}
                  onChange={(e) => setMasaSeleccionada(e.target.value as Masa)}
                >
                  {product.masasDisponibles.map((masa) => (
                    <option key={masa} value={masa}>
                      {masa}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={style.modal_footer}>
            <span className={style.modal_price}>${precioTotal}</span>
            <Button
              variant={`${precios.find((i) => i.selected) ? "primary" : "disabled"}`}
              label="Agregar al carrito"
              onClick={
                precios.find((i) => i.selected) ? handleAgregar : undefined
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
