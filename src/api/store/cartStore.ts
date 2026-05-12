// src/store/cartStore.ts
import { create } from "zustand";
import type { Tamano } from "../../ts/menu.interface";
import type { CartStore } from "../ts/store.interface";

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    set((state) => {
      const existe = state.items.find((i) => i.id === item.id);
      if (existe) {
        return {
          items: state.items.map((i) => (i.id === item.id ? item : i)),
        };
      }
      return { items: [...state.items, item] };
    });
  },

  updateCantidadItem: (id: number, tamano: Tamano, delta: number) => {
    set((state) => ({
      items: state.items.map((i) => {
        if (i.id !== id) return i;

        const tamanos = i.tamanos.map((t) =>
          t.tamano === tamano
            ? { ...t, cantidad: Math.max(1, t.cantidad + delta) }
            : t,
        );

        const precioTotal =
          tamanos.reduce((sum, t) => sum + t.valor * t.cantidad, 0) +
          i.ingredientesExtras.reduce((sum, e) => sum + e.precio, 0);

        return { ...i, tamanos, precioTotal };
      }),
    }));
  },

  removeIngredienteExtra: (id: number, nombre: string) => {
    set((state) => ({
      items: state.items.map((i) => {
        if (i.id !== id) return i;

        const ingredientesExtras = i.ingredientesExtras.filter(
          (e) => e.nombre !== nombre,
        );

        const precioTotal =
          i.tamanos.reduce((sum, t) => sum + t.valor * t.cantidad, 0) +
          ingredientesExtras.reduce((sum, e) => sum + e.precio, 0);

        return { ...i, ingredientesExtras, precioTotal };
      }),
    }));
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    return get().items.reduce((sum, i) => sum + i.precioTotal, 0);
  },

  calcularPrecioTotal: (tamanos, extras) => {
    const totalTamanos = tamanos.reduce(
      (sum, t) => sum + t.valor * t.cantidad,
      0,
    );
    const totalExtras = extras
      .filter((e) => e.selected && e.esExtra)
      .reduce((sum, e) => sum + e.precio, 0);

    return totalTamanos + totalExtras;
  },

  getWhatsAppMessage: (telefono) => {
    const { items, getTotal } = get();

    const lineas = items.map((item) => {
      const tamanos = item.tamanos
        .filter((t) => t.cantidad > 0)
        .map(
          (t) => `   • ${t.tamano} x${t.cantidad} — $${t.valor * t.cantidad}`,
        )
        .join("\n");

      const extras = item.ingredientesExtras
        .filter((e) => e.selected && e.esExtra)
        .map((e) => `   • ${e.nombre} +$${e.precio}`)
        .join("\n");

      return [
        `🍕 *${item.nombre}*`,
        `   Masa: ${item.masa}`,
        tamanos,
        extras ? `   Extras:\n${extras}` : null,
        `   Subtotal: $${item.precioTotal}`,
      ]
        .filter(Boolean)
        .join("\n");
    });

    const mensaje =
      `🛒 *Mi Orden:*\n\n` +
      `${lineas.join("\n\n")}\n\n` +
      `💵 *Total: $${getTotal()}*\n\n` +
      `¡Hola! Quisiera hacer este pedido.`;

    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  },
}));
