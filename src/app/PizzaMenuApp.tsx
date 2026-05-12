import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Home } from "../home/Home";

export const PizzaMenuApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
