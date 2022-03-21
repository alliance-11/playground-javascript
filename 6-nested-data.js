const products = [
  { type: "sink", name: 'Cindy', price: 100 },
  { type: "hairdryer", name: 'Harry', price: 50 },
  { type: "toaster", name: 'Todd', price: 30,
    variants: [
      { type: "basic", name: "Basic 1-Slot", upsell: 0 }, 
      { type: "premium", name: "Premium 3-Slots", upsell: 10 }
    ]
  }
];

// output:
// preis von toster Todd => variante "premium" => preis + upsell

const toaster = products.find( product => {
  return product.type === "toaster"
} )

const toasterVariant = toaster.variants.find( variant => {
    return variant.type === "premium"
})

console.log( toaster.price )
console.log( toasterVariant.upsell )

console.log( "Total price: ", toaster.price + toasterVariant.upsell)
