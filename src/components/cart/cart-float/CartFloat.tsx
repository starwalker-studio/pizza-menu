// CartFloat.tsx
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartStore } from "../../../api/store/cartStore";
import style from "./CartFloat.module.scss";

type CartFloatProps = {
  onClick: () => void;
};

export const CartFloat = ({ onClick }: CartFloatProps) => {
  const { items } = useCartStore();
  const totalItems = items.reduce(
    (sum, i) => sum + i.tamanos.reduce((s, t) => s + t.cantidad, 0),
    0,
  );

  if (totalItems === 0) return null;

  return (
    <div className={style.cart_float}>
      <button className={style.cart_btn} onClick={onClick}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className={style.cart_badge}>{totalItems}</span>
      </button>
    </div>
  );
};
