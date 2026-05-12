import { useRef, useState } from "react";
import { Cart } from "../components/cart/Cart";
import { CartFloat } from "../components/cart/cart-float/CartFloat";
import { Hero, Masas, Menu } from "./sections";
import { Info } from "./sections/info/Info";

export const Home = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: "menu") => {
    const map = {
      menu: menuRef,
    };

    map[section].current?.scrollIntoView({ behavior: "smooth" });
  };
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  return (
    <>
      <Hero onNavigate={handleNavigate} />
      <Masas />
      <Menu ref={menuRef} />
      <Info />
      <CartFloat onClick={() => setCartOpen(true)} />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};
