const cart = [
  { _id: "f1", name: "Apple", quantity: 2, price: 1, inStock: true },
  { _id: "f2", name: "Book", quantity: 1, price: 10, inStock: true },
  { _id: "f3", name: "Toaster", quantity: 1, price: 25, inStock: true },
  { _id: "f4", name: "TV", quantity: 0, price: 100, inStock: true },
];
// WHOLE ARRAY updates
// we always copy original "cart" object
// ADD
let addToCart = (cart, newItam) => {
  return [...cart, newItam];
};
let newCart = addToCart(cart, {
  _id: "f6",
  name: "Lampe",
  quantity: 2,
  price: 3,
});
console.log(newCart);
newCart = addToCart(newCart, {
  _id: "f7",
  name: "Vase",
  quantity: 1,
  price: 4,
});
console.log(newCart);

// DELETE
const deleteObjectFromArray = (name) => {
  return cart.filter((c) => c.name !== name);
};
console.log(deleteObjectFromArray("TV"));

// UPDATE

const updatedObject = (name, newPrice) => {
  const newState = cart.map((obj) =>
    obj.name === name ? { ...obj, price: newPrice } : obj
  );
  return newState;
};
console.log(updatedObject("Book", 25));

const booleanState = (name, changeState) => {
  const newState = cart.map(state =>
    state.name === name ? {...state, inStock: changeState} : state
    )
    return newState
}
console.log(booleanState('Toaster', false))

// FILTER
// - by name
// ???
// - by price range (min, max)

