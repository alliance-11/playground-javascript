// NESTED array
const netflixSeries = [

  // series 1
  { name: "Zeit der Geheimnisse", 
    seasons: [
      { nr: 1, episodesCount: 10 },
      { nr: 2, episodesCount: 8 },
      { nr: 3, episodesCount: 13 },
    ]
  },
  
  // series 2
  { name: "Big Bang Theory", 
    seasons: [
      { nr: 1, episodesCount: 10 },
      { nr: 2, episodesCount: 8 },
      { nr: 3, episodesCount: 11 },
      { nr: 4, episodesCount: 9 },
      { nr: 5, episodesCount: 13 },
    ]
  },

];

// exptected output: 11

// console.log( netflixSeries[1].seasons[2].episodesCount )


// Object => name === "Zeit der Geheimnisse"// 


const searchSeasonsWithMin10Episodes = (seriesName) => {

  let seriesFound = netflixSeries.find((series) => {
    // console.log( series.name ) 
    return seriesName === series.name // true /false
  })
  
  let seasons = seriesFound.seasons
  
  let seasonsWithAtLeast10Epiroses = seasons.filter( season => {
    return season.episodesCount >= 10
  })
  
  console.log(seasonsWithAtLeast10Epiroses)
}

// inject season we are looking for as PARAMETER
searchSeasonsWithMin10Episodes("Zeit der Geheimnisse")
searchSeasonsWithMin10Episodes("Big Bang Theory")


// CODE DUPLICATION
// seriesFound = netflixSeries.find((series) => {
//   // console.log( series.name ) 
//   return "Big Bang Theory" === series.name // true /false
// })

// console.log( seriesFound.seasons )

// seasons = seriesFound.seasons

// seasonsWithAtLeast10Epiroses = seasons.filter( season => {
//   return season.episodesCount >= 10
// })

// console.log(seasonsWithAtLeast10Epiroses)
