const kitchen = [ 'waschmaschine', 'kuehlschrank', 'spuele', 'moebel' ]
// const waschmaschine = kitchen[0]
// const kuehlschrank = kitchen[1]
const [ waschmaschine, kuehlschrank ] = kitchen
console.log(waschmaschine)
console.log(kuehlschrank)

const useState = (arr) => {
  return [
    arr,
    () => {}
  ]
}

const [books, setBooks] = useState([{ id: "1", title: "Gael guide to hooks" }])
console.log( books)