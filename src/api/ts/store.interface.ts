import type { Masa, Tamano } from "../../ts/menu.interface";

export interface IngredienteCart {
  nombre: string;
  esExtra: boolean;
  selected: boolean;
  precio: number;
}

export interface TamanoSeleccionado {
  selected: boolean;
  cantidad: number;
  tamano: Tamano;
  valor: number;
}

export interface CartItem {
  id: number;
  nombre: string;
  imagen?: string;
  masa?: Masa;
  tamanos: TamanoSeleccionado[];
  ingredientesExtras: IngredienteCart[];
  precioBase: number;
  precioTotal: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateCantidadItem: (id: number, tamano: Tamano, delta: number) => void;
  removeIngredienteExtra: (id: number, nombre: string) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  calcularPrecioTotal: (
    tamanos: TamanoSeleccionado[],
    extras: IngredienteCart[],
  ) => number;
  getWhatsAppMessage: (telefono: string) => string;
}
