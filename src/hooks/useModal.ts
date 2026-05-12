import { useMemo, useState } from "react";
import type { Masa, Pizza, Tamano } from "../ts/menu.interface";

export const useModal = (product: Pizza) => {
  const [ingredientes, setIngredientes] = useState(
    () =>
      product?.ingredientes.map((ing) => ({
        ...ing,
        selected: false,
        precio: 20,
      })) ?? [],
  );
  const [precios, setPrecios] = useState(
    product?.precios.map((p) => ({ ...p, selected: false, cantidad: 1 })) ?? [],
  );
  const [masaSeleccionada, setMasaSeleccionada] = useState<Masa>(
    product?.masasDisponibles[0],
  );

  const toggleIngredientes = (nombre: string) => {
    setIngredientes((prev) =>
      prev.map((ing) =>
        ing.nombre === nombre ? { ...ing, selected: !ing.selected } : ing,
      ),
    );
  };
  const togglePrecios = (tamano: string) => {
    setPrecios((prev) =>
      prev.map((price) =>
        price.tamano === tamano
          ? { ...price, selected: !price.selected }
          : price,
      ),
    );
  };

  const updateCantidad = (tamano: Tamano, delta: number) => {
    setPrecios((prev) =>
      prev.map((p) =>
        p.tamano === tamano
          ? { ...p, cantidad: Math.max(1, p.cantidad + delta) }
          : p,
      ),
    );
  };

  const precioTotal = useMemo(() => {
    const totalTamanos = precios
      .filter((p) => p.selected)
      .reduce((sum, p) => sum + p.valor * p.cantidad, 0);

    const totalExtras = ingredientes
      .filter((ing) => ing.selected && ing.selected)
      .reduce((sum, ing) => sum + ing.precio, 0);

    return totalTamanos + totalExtras;
  }, [precios, ingredientes]);

  return {
    toggleIngredientes,
    togglePrecios,
    setMasaSeleccionada,
    updateCantidad,
    masaSeleccionada,
    ingredientes,
    precios,
    precioTotal,
  };
};
