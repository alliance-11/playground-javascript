const cart = [
  { _id: "f1", name: "Apple", quantity: 2, price: 1 },
  { _id: "f2", name: "Book", quantity: 1, price: 10 },
  { _id: "f3", name: "Toaster", quantity: 1, price: 25 },
  { _id: "f4", name: "TV", quantity: 0, price: 100 },
];
// WHOLE ARRAY updates
// we always copy original "cart" object
// ADD
let addToCart = (cart, newItam) => {
  return [...cart, newItam];
};
let newCart = addToCart(cart, { _id: "f6", name: "Lampe", quantity: 2, price:3 });
console.log(newCart)
newCart = addToCart(newCart, { _id: "f7", name: "Vase", quantity: 1, price:4 });
console.log(newCart)


// DELETE

// UPDATE

// FILTER
// - by name
// - by price range (min, max)
