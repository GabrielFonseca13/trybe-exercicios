import Pizza from "./Pizza";
import { Vegetariana } from "./PizzaFlavorTypes";

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana,
}

export default PizzaVegetariana;