import React, { Component } from 'react'
import {connect} from 'react-redux'

class Hero extends Component {

    constructor(props){
        super(props)
    }
  render() {

    let movieList = this.props.list.map((movie, index) => {
        return (
          <div class="hero">
          <li key={index}>
          <h2>{movie.movieTitle}</h2>
          <img src={movie.moviePoster} alt={movie.movieTitle} />
          <button onClick={() => {this.props.onDeleteMovie(movie)}}>Delete Movie</button>
          </li>
          </div>
        )
      })

    return (
        <div class="hero">
        <input onChange={this.props.handleHeroTitle} type="text" placeholder="Enter Movie Title"/>
        <input onChange={this.props.handleHeroPoster} type="text" placeholder="Enter Movie Image" />
        <button onClick={() => {this.props.onAddMovie(this.props.title, this.props.poster)}}>Add Movie</button>
       
        <ul class="view">
          {movieList}
        </ul>
        </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
      list : state.movies,
      title : state.movieTitle,
      poster : state.moviePoster
    }
}

const mapDispatchToProps = (dispatch) => {
     return{
     handleHeroTitle : (e) => dispatch({type : "TITLE_ADD", value : e.target.value}),
     handleHeroPoster : (e) => dispatch({type : "POSTER_ADD", value : e.target.value}),
     onAddMovie : () => dispatch()({ type : "MOVIE_ADD", result: {movieTitle : title, moviePoster : poster}}),
     onDeleteMovie : () => dispatch()({ type : "MOVIE_SUBTRACT", result: movie})
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)



