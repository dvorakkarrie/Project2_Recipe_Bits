// import React, { useEffect, useState} from 'react';
import React, { Component } from 'react';
// import {Route, Link, Switch} from 'react-router-dom';

// Imported axios functionality
import axios from 'axios';

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
        recipes: [],                     // This will display recipes from the Edamam API call.
        searchText: '',                  // This will hold search criteria entered by the user.
        currentRecipe: null              // This will hold the recipe selected from the recipes array.
      }
  }

  handleChange = (event) => {            // This function will update the search variable.
    this.setState({
      searchText: event.target.value})   // This will assign the user's entered data to the search variable.
  }

  handleSubmit = (event) => {           // This will trigger the API call to get recipes based upon searchRecipe value and subsequently clear the value.
    event.preventDefault()              // This will prevent this function from refreshing.
    this.getRecipes()                   // This will trigger the getRecipe function to send an API call to Edamam.
    this.setState({
      searchText: ''                    // This will assign an empty string to the search variable.
    })
  }

  getRecipes = () => {                  // This send the API call to Edamam to retrieve the requested recipes.
    axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${this.state.searchText}&app_id=${recipeID}&app_key=${recipeKey}&from=0&to=10&calories=591-722&health=alcohol-free`
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

  handleClick = (recipe) => {           // This will display only one selected recipe.
    this.setState({
      currentRecipe: recipe             // This will assign the selected recipe to the currentRecipe variable.
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
            value={this.state.searchText}>{this.state.value}</input>         
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

