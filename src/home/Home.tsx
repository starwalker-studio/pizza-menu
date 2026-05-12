import { useState } from "react";
import { Cart } from "../components/cart/Cart";
import { CartFloat } from "../components/cart/cart-float/CartFloat";
import { Hero, Masas, Menu } from "./sections";

export const Home = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  return (
    <>
      <Hero />
      <Masas />
      <Menu />
      <CartFloat onClick={() => setCartOpen(true)} />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};
