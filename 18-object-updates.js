

const book = {
  title: "JS for Beginners",
  read: 25
}

console.log(book.read)

// read => 1
const bookUpdate = {
  ...book,
  read: book.read + 1 // vorheriger wert von read + 1
}

console.log( book )
console.log( bookUpdate )

const bookUpdate2 = {
  ...book,
  title: book.title.toUpperCase() // take existing title and make uppercase
}

console.log( bookUpdate2 )