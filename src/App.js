// Imported component functionality
import React, { Component } from 'react';
import { Link, Redirect, Route,
  // Switch 
} from 'react-router-dom';

// Imported axios functionality
import axios from 'axios';

// Imported components
import Header from './Header'
import NewSearch from './NewSearch'
import Search from './Search'
import RecipeList from './RecipeList'
// import RecipeDetails from './RecipeDetails'

// Imported App css file
import './App.css';

// Declared variables for recipe ID and Key
const recipeAPIID = 'a15fc147';
const recipeAPIKey = 'e3d248a38d6bc2ecdfae3d9d6b9c588e';

// set up main App component as class
class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        minCalories: 0,                 // This is the default value of minimum calories amount. 
        maxCalories: '',                // This is the default value of maximum calories amount.
        isOpen: true,                   // This is being used to toggle the visibility of New Search and Search components.
        minRecipes: 0,                  // This is the minimum default value of recipes called from Edamam.
        maxRecipes: 30,                 // This is the maximum default value of recipes called from Edamam.
        recipeID: recipeAPIID,          // This is the recipe API ID used when calling data from Edamam.
        recipeKey: recipeAPIKey,        // This is the recipe API Key used when calling data from Edamam.
        recipes: [],                     // This will display recipes from the Edamam API call.
        searchText: '',                  // This will hold search criteria entered by the user.
      }
  }

  handleChangeSearch = (event) => {       // This function will update the search text box.
    this.setState({
      searchText: event.target.value      // This will assign the user's entered data to the search text variable.
    })   
  }

  handleChangeMinCalories = (event) => {  // This function will update the minimum calories text box.
    this.setState({
      minCalories: event.target.value      // This will assign the user's entered data to the minimum calorie variable.
    })
  }

  handleChangeMaxCalories = (event) => {   // This function will update the maximum calories text box.
    this.setState({
      maxCalories: event.target.value     // This will assign the user's entered data to the maximum calorie variable.
    })
  }

  getRecipes = () => {                  // This sends the API call to Edamam to retrieve the requested recipes.
    axios({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${this.state.searchText}&app_id=${this.state.recipeID}&app_key=${this.state.recipeKey}&from=${this.state.minRecipes}&to=${this.state.maxRecipes}&calories=${this.state.minCalories}-${this.state.maxCalories}`
    })
    .then(response => {
      this.setState({
        recipes: response.data.hits     // This assigns the data from Edamam to the recipes variable.
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleSubmitSearch = (event) => {     // This will trigger the API call to get recipes based upon searchRecipe value and subsequently clear the value.
    event.preventDefault()              // This will prevent this function from refreshing.
    this.getRecipes()                   // This will trigger the getRecipe function to send an API call to Edamam.
    this.setState({
      isOpen: !this.state.isOpen        // This function will close the search side bar and display a New Search link to refresh the page.
    })
  }

  refreshPage = () => {                 // This function will clear the input text boxes and refresh the page.
    console.log('New Start clicked!')
    window.location.reload(false);
    this.setState({
      isOpen: this.state.isOpen         // This function will display the search side bar and hide the New Search link.    
    })
  }

  render() {

    const recipeList = this.state.recipes.map((item, index) => {      // This function creates a new recipe object and maps it to a RecipleList component.
      return (
        <RecipeList
          key={index} 
          index={index}                                                // This is the the recipeList unique key.
          handleClick={this.handleClick}                              // This is mapping the handleClick function to be used in the RecipeList component.
          recipe={item.recipe}                                        // This is mapping the recipe object to a recipe prop.
        />
      )
    })

    return (                                                       
      <div className="App">                                    
        <Header />                                                    
        <div className='main-section'>
          <div className='sidebar' style={{ width: this.state.isOpen ? '20%' : '10%' }} >
            <Link to='/'>
              <NewSearch refreshPage={this.refreshPage} isOpen={this.state.isOpen}/>
            </Link>
            <Route path='*' render={() => <Redirect to='/' />} />
            <div className='search-section' 
              style={{ visibility: this.state.isOpen ? 'visible' : 'hidden' }}
            >
              <Search
                minCalories={this.state.minCalories}
                maxCalories={this.state.maxCalories}
                maxRecipes={this.state.maxRecipes}
                searchText={this.state.searchText}
                handleChangeSearch={this.handleChangeSearch} 
                handleChangeMinCalories={this.handleChangeMinCalories}
                handleChangeMaxCalories={this.handleChangeMaxCalories}
                handleSubmitSearch={this.handleSubmitSearch}
              />
            </div>
          </div>
          {/* <main>
            <Switch>
              <Route path='recipelist/:recipes' render={(props) => <RecipeList {...props} recipeList={recipeList} /> } />
              <Route path='recipedetails/:index' render={(props) => <RecipeDetails {...props} recipedetails={props.match.params.index} /> } />
            </Switch>
          </main> */}
          <div className='recipe-section' 
            style={{ width: this.state.isOpen ? '75%' : '100%' }} >
            {recipeList}
          </div>
        </div>
      </div>
    )
  }
}
 
export default App;

