import cardapio from "data/Cardapio.json";
import Cardapio from "pages/Cardapio";

export type Cardapio = typeof cardapio;

export type prato = typeof cardapio[0]