export type Tamano =
  | "personal"
  | "chica"
  | "mediana"
  | "grande"
  | "extragrande";
export type Masa = "delgada" | "gruesa" | "rellena" | "integral";
export type CategoriaMenu =
  | "pizzas"
  | "combos"
  | "extras"
  | "bebidas"
  | "postres";

export interface Precio {
  tamano: Tamano;
  valor: number;
}

export interface Ingrediente {
  nombre: string;
  esExtra: boolean;
}

export interface Combo {
  id: number;
  nombre: string;
  descripcion: string;
  incluye: string[];
  precio: number;
  popular: boolean;
}

export interface Pizza {
  id: number;
  nombre: string;
  descripcion: string;
  ingredientes: Ingrediente[];
  precios: Precio[];
  masasDisponibles: Masa[];
  categoria: "clasica" | "especial" | "vegetariana";
  popular: boolean;
  imagen?: string;
}

export interface Extra {
  id: number;
  nombre: string;
  precio: number;
}

export interface Bebida {
  id: number;
  nombre: string;
  opciones: { descripcion: string; precio: number }[];
}

export interface Postre {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

export interface Menu {
  restaurante: string;
  telefono: string;
  horario: string;
  masas: { id: number, tipo: Masa; descripcion: string, img: string }[];
  pizzas: Pizza[];
  combos: Combo[];
  extras: Extra[];
  bebidas: Bebida[];
  postres: Postre[];
}