const initialState = {
  hello: "Hello World",
  movieList: { title: "", description: "", movies: [] }
}

// stateとactionを受け取る
export default function reducer(state = initialState, action) {
  // action.typeでswich
  switch(action.type) {
    case 'HELLO_WORLD' :
    return{
      ...state,
      hello: action.hello
    };

    case 'MOVIE_LIST' :
    return {
      ...state,
      movieList: action.movieList
    }

    default:
    return state

  }
}
