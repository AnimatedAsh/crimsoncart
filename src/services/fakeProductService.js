import * as categoriesAPI from "./fakeCategoryService";

let products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Peach Hibiscus Plant without Pot",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Floral Plants" },
    numberInStock: 2,
    price: 200,
    productImageURL: "../img/peachHibiscus.jpg",
    thumbImageUrl: "../img/peachHibiscus_2.jpg",
    userRating: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Rolling Nature Money Plant with Pot",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Ornamental Plants" },
    numberInStock: 5,
    price: 500,
    productImageURL: "../img/moneyplant.jpg",
    thumbImageUrl: "../img/moneyplant_2.jpg",
    userRating: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    title: "White Ceramic Pot",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Pots & Accessories" },
    numberInStock: 5,
    price: 499,
    productImageURL: "../img/whiteceramicpot.jpg",
    thumbImageUrl: "../img/whiteceramicpot_2.jpg",
    userRating: 4,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p._id === id);
}

export function saveProduct(product) {
  let productInDb = products.find((p) => p._id === product._id) || {};
  productInDb.title = product.title;
  productInDb.category = categoriesAPI.categories.find(
    (c) => c._id === product.categoryId
  );
  productInDb.numberInStock = product.numberInStock;
  productInDb.price = product.price;
  productInDb.productImageURL = product.productImageURL;

  if (!productInDb._id) {
    productInDb._id = Date.now().toString();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find((p) => p._id === id);
  products.splice(products.indexOf(productInDb), 1);
}
