import Pizza from "./Pizza";
import { Comum } from "./PizzaFlavorTypes";

interface PizzaComum extends Pizza {
  flavor: Comum
}

export default PizzaComum;