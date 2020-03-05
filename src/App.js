// import React, { useEffect, useState} from 'react';
import React, { Component } from 'react';
// import {Route, Link, Switch} from 'react-router-dom';
// Imported axios functionality
import axios from 'axios';
// import dotenv to secure API

//Import components
import RecipeList from './RecipeList'

// Imported App css file
import './App.css';

// Declared variables for recipe ID and Key
const recipeID = 'a15fc147';
const recipeKey = 'e3d248a38d6bc2ecdfae3d9d6b9c588e';

// Declared variables for nutrition ID and Key
// const nutritionID = '9e7c4de7';
// const nutritionKey = '5f146b0d7ef29c7bd609eefbf6286eb0';

// set up App component as class
class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        recipes: [],
        search: null,
        currentRecipe: null
      }
  }

  handleChange = (event) => {
    console.log('handleChange is running')
    this.setState({
      search: event.target.value})
    console.log('Word is ' + this.state.search)
  }

  handleSubmit = (event) => {
    console.log('handleSubmit is running')  
    event.preventDefault()
    console.log(this.state.search)
    this.getRecipes()
    this.setState({
      searchRecipes: ''
    })
  }

  getRecipes = () => {
    axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${this.state.search}&app_id=${recipeID}&app_key=${recipeKey}&from=0&to=10&calories=591-722&health=alcohol-free`
    })
    .then(response => {
      console.log(response.data.hits)
      this.setState({
        recipes: response.data.hits
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleClick = (recipe) => {
    console.log('handleClick is running')
    console.log(recipe)
    this.setState({
      currentRecipe: recipe
    })
  }

render() {
  return (
    <div className="App">
      <h1>Recipe Bits</h1>
      <nav>Home</nav>
      <form className='search-form' >
        <input type='text' className='search-box' 
          placeholder="i.e. chicken, ice cream" onChange={this.handleChange} 
          value={this.searchRecipe}></input>         
        <button type='button' className='search-button' 
          onClick={this.handleSubmit}>Search
        </button>        
      </form>
        {this.state.recipes && this.state.recipes.map((item, index) => (
          <div key={index} className='search-results'>
            <RecipeList 
              title={item.recipe.label}
              calories={item.recipe.calories}
              image={item.recipe.image}
              ingredients={item.recipe.ingredients}
            />
          </div>
        )
      )}
    </div>
  );
}
}
 
export default App;

