function pizzaOven(crustType, sauseType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauseType =  sauseType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1= pizzaOven("thin", "red", "lots", "none");
console.log(pizza1);

var pizza2 = pizzaOven("deep","traditional","mozzarella","pepperoni, sausage");
console.log(pizza2);

