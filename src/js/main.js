import "./dark-mode.js";

import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";

import { showProducts } from "./updateProducts.js";
showProducts();

fetchData("https://dummyjson.com/product")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
