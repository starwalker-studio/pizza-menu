import { Route, Routes } from "react-router-dom";
import { Cart } from "../components/cart/Cart";
import { Home } from "../home/Home";

export const PizzaMenuApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
