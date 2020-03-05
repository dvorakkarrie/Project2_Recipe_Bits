// Imported React modules
import React, { useEffect, useState} from 'react';
// import {Route, Link, Switch} from 'react-router-dom';

// Imported axios functionality
import axios from 'axios';

//Import components
import RecipeList from './RecipeList'

// Imported App css file
import './App.css';

// Declared variables for recipe ID and Key
const recipeID = 'a15fc147';
const recipeKey = 'c7ae8ff47c0f0234e1772099bfad5baa';

// Declared variables for nutrition ID and Key
// const nutritionID = '9e7c4de7';
// const nutritionKey = '5f146b0d7ef29c7bd609eefbf6286eb0';

// set up App component as function
export default function App() {

  // factored code for useState functionality
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [food, setFood] = useState('tacos')

  // factored code for useEffect functionality
  useEffect( () => {
    getRecipes()
  }, [food])  // only executing the useEffect when for the initial load.

  // Defined getRecipe as constant variable to run recipe api call
  const getRecipes = () => {
    axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${food}&app_id=${recipeID}&app_key=${recipeKey}&from=0&to=10&calories=591-722&health=alcohol-free`
    })
    .then(response => {
      console.log(response.data.hits)
      setRecipes(response.data.hits)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getRecipeList = (e) => {
    e.preventDefault()
    setFood(search)
    setSearch('')
  }

  return (
    <div className="App">
      <h1>Recipe Bits</h1>
      <nav>Home</nav>
      <form className='search-form' onSubmit={getRecipeList}>
        <input type='text' className='search-box' 
          placeholder="i.e. chicken, ice cream" onChange={handleChange} 
          value={search}></input>         
        <button type='button' className='search-button'>Search</button>        
      </form>
        {recipes && recipes.map((item, index) => (
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

