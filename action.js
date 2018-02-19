export function mapStateToProps(state) {
  return state;
}

// dispatchに渡すことで、reducer.jsのreducer()がcallされる
export function mapDispatchToProps(dispatch) {
  return {
    // hello 文字列を変更する
    updateHello: (text) => {
      dispatch( {type: 'HELLO_WORLD', hello: text} )
    },
    updateMovieList: (movieList) => {
      dispatch( {type: 'MOVIE_LIST', movieList: movieList} )
    }
  }
}
