import Pizza from "./Pizza";
import { Doce } from "./PizzaFlavorTypes";

interface PizzaDoce extends Pizza {
  flavor: Doce
  slices: 4
}

export default PizzaDoce;