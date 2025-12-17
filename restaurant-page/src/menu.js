const content_div = document.querySelector("#content");

export default function initMenu() {
  const menu_container = document.createElement("div");
  menu_container.classList.add("menu-container");
  const menu = generateMenu();

  let index = 0;
  menu.forEach((dish) => {
    ++index;
    const dish_div = document.createElement("div");
    const index_div = document.createElement("div");
    const name_div = document.createElement("div");
    const price_div = document.createElement("div");
    const ingredients_div = document.createElement("div");

    dish_div.classList.add("menu-dish");
    index_div.classList.add("menu-index");
    name_div.classList.add("menu-name");
    price_div.classList.add("menu-price");
    ingredients_div.classList.add("menu-ingredients");

    index_div.textContent = `${index}.`;
    name_div.textContent = dish.name;
    price_div.textContent = `${dish.price.toFixed(2)}€`;
    ingredients_div.textContent = dish.ingredients.join(", ");

    dish_div.appendChild(index_div);
    dish_div.appendChild(name_div);
    dish_div.appendChild(price_div);
    dish_div.appendChild(ingredients_div);

    menu_container.appendChild(dish_div);
  });
  content_div.appendChild(menu_container);
}

function generateMenu() {
  return [ 
    new Dish("Margherita", ["tomato sauce", "fresh mozzarella", "fresh basil", "olive oil"], 11.00),
    new Dish("Marinara", ["tomato sauce", "garlic", "oregano", "olive oil"], 9.50),
    new Dish("Diavola", ["tomato sauce", "mozzarella", "spicy salami", "chili flakes"], 13.00),
    new Dish("Quattro Formaggi", ["mozzarella", "gorgonzola", "parmesan", "provolone"], 14.00),
    new Dish("Capricciosa", ["tomato sauce", "mozzarella", "ham", "mushrooms", "artichokes", "olives"], 14.50),
    new Dish("Prosciutto e Rucola", ["tomato sauce", "mozzarella", "prosciutto crudo", "arugula", "parmesan"], 15.00),
    new Dish("Funghi", ["tomato sauce", "mozzarella", "fresh mushrooms", "garlic", "oregano"], 12.00),
    new Dish("Napoletana", ["tomato sauce", "mozzarella", "anchovies", "capers", "oregano"], 12.50),
    new Dish("Bufalina", ["tomato sauce", "buffalo mozzarella", "cherry tomatoes", "basil"], 15.00),
    new Dish("Salsiccia e Friarielli", ["mozzarella", "Italian sausage", "broccoli rabe", "chili oil"], 15.50)
  ];
}

class Dish {
  constructor(name, ingredients, price) {
    this.m_name = name;
    this.m_ingredients = ingredients;
    this.m_price = price;
  }

  get name() { return this.m_name; }
  get ingredients() { return this.m_ingredients; }
  get price() { return this.m_price; }
}
