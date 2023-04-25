import Pizza from "./Pizza";
import PizzaComum from "./PizzaCommon";
import PizzaDoce from "./PizzaDoce";
import PizzaVegetariana from "./PizzaVegetariana";

let pizza1: Pizza = {
  flavor: 'Calabresa',
  slices: 8
};

let pizza2: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

let pizza3: Pizza = {
  flavor: 'Nutella',
  slices: 4
}

console.log('Pizzas Feitas:', pizza1, pizza2, pizza3);

let pizzaComum1: PizzaComum = {
  flavor: 'Calabresa',
  slices: 6
}

let pizzaComum2: PizzaComum = {
  flavor: 'Frango',
  slices: 4
}

let pizzaComum3: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 8
}

console.log('Pizzas Comuns Feitas:', pizzaComum1, pizzaComum2, pizzaComum3);

let pizzaVegetariana1: PizzaVegetariana = {
  flavor: 'Marguerita',
  slices: 4
}

let pizzaVegetariana2: PizzaVegetariana = {
  flavor: 'Palmito',
  slices: 6
}

console.log('Pizzas vegetarianas Feitas:', pizzaVegetariana1, pizzaVegetariana2);

let pizzaDoce1: PizzaDoce = {
  flavor: 'Marshmellow',
  slices: 4,
}

let pizzaDoce2: PizzaDoce = {
  flavor: 'Nutella',
  slices: 4
}

console.log('Pizzas Doces Feitas', pizzaDoce1, pizzaDoce2);