// import React, { useEffect, useState} from 'react';
import React, { Component } from 'react';
// import {Route, Link, Switch} from 'react-router-dom';

// Imported axios functionality
import axios from 'axios';

//Import components
import Header from './Header'
import RecipeList from './RecipeList'
import Search from './Search'

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
        caloriesFrom: 0,
        caloriesTo: 1000,
      }
  }

  handleChangeSearch = (event) => {       // This function will update the search variable.
    this.setState({
      searchText: event.target.value      // This will assign the user's entered data to the search variable.
    })   
  }

  handleChangeCaloriesFrom = (event) => {
    this.setState({
      caloriesFrom: event.target.value * 10
    })
  }

  handleChangeCaloriesTo = (event) => {
    this.setState({
      caloriesTo: event.target.value * 10
    })
  }

  handleSubmitSearch = (event) => {     // This will trigger the API call to get recipes based upon searchRecipe value and subsequently clear the value.
    event.preventDefault()              // This will prevent this function from refreshing.
    this.getRecipes()                   // This will trigger the getRecipe function to send an API call to Edamam.
    this.setState({
      searchText: ''                    // This will assign an empty string to the search variable.
    })
  }

  getRecipes = () => {                  // This send the API call to Edamam to retrieve the requested recipes.
    axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${this.state.searchText}&app_id=${recipeID}&app_key=${recipeKey}&from=0&to=10&calories=${this.state.caloriesFrom}-${this.state.caloriesTo}`
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

  render() {

    const recipeList = this.state.recipes.map((item, index) => {
      return (
        <RecipeList
          key={index}
          handleClick={this.handleClick}
          selectedRecipe={item.recipe}
          title={item.recipe.label}
          calories={Math.floor((item.recipe.calories/item.recipe.yield)/10)}
          image={item.recipe.image}
          ingredients={item.recipe.ingredients}
        />
      )
    })

    return (
      <div className="App">
        <Header />
        <div className='main-section'>
          <div className='search-section'>
            <Search
              handleChangeSearch={this.handleChangeSearch} 
              handleChangeCaloriesFrom={this.handleChangeCaloriesFrom}
              handleChangeCaloriesTo={this.handleChangeCaloriesTo}
              handleSubmitSearch={this.handleSubmitSearch}
            />
          </div>
          <div className='recipe-section'>
            {recipeList}
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;

