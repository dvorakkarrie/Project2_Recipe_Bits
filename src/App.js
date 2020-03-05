// Imported React modules
import React, { Component } from 'react';
// import {Route, Link, Switch} from 'react-router-dom';

// Imported axios functionality
import axios from 'axios';

// Imported App css file
import './App.css';

// Declared variables for recipe ID and Key
const recipeID = 'a15fc147';
const recipeKey = 'c7ae8ff47c0f0234e1772099bfad5baa';

// Declared variables for nutrition ID and Key
// const nutritionID = '9e7c4de7';
// const nutritionKey = '5f146b0d7ef29c7bd609eefbf6286eb0';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        recipes: [],
        currentRecipe: null
      }
    }

  componentDidMount() {
    this.getRecipes()
  }

  getRecipes() {
    axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=chicken&app_id=${recipeID}&app_key=${recipeKey}&from=0&to=3&calories=591-722&health=alcohol-free`
    })
    .then(response => {
      console.log(response.data.hits)
      this.setState({recipes: response.data.hits})
      console.log(this.state.recipes)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Recipe Bits</h1>
        <form className='recipe-form'>
          <input type='text' className='recipe-search' placeholder="i.e. chicken, broccoli, ice cream"></input>
          <button type='button' className='recipe-button'>Search</button>
        </form>
        {this.state.recipes && this.state.recipes.map((recipe, index) => {
          return (
            <div key={index} className='recipeList'>Image</div>
          )
        })}
      </div>
    );
  }
}
  
export default App;
