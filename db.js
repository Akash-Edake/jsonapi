//const items = require("./data/items");
// const tags = require("./data/ecommerce");
const brands = require("./data/brands");
const cart = require("./data/cart");
const category = require("./data/category");
const product = require("./data/product");
const users = require("./data/users");
// const itemTypes = require("./data/");

module.exports = {
  brands,
  cart,
  category,
  product,
  users
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
