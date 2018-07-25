
const initialState = {
    movieList: [],
    movieTitle: "",
    moviePoster: ""

}

const reducer = (state = initialState,action) => {

    switch(action.type) {
        case "TITLE_ADD":
          return {
            ...state,
            movieTitle: action.value,
          }
          case "POSTER_ADD":
          return {
            ...state,
            moviePoster: action.value,
          }
          case "MOVIE_ADD":
          return {
            ...state,
            movieList : state.movies.concat(action.result)
          }
          case "MOVIE_SUBTRACT":
          return {
            ...state,
            movieList : state.movies.filter(movie => movie !== action.result)
          }
      } 
      return state
}

export default reducer