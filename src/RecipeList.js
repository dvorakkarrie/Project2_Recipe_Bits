// Imported component functionality
import React, {Component} from 'react'
import { Link } from 'react-router-dom';

// Imported components
import RecipeURL from './RecipeURL'

// set up RecipeList component as class
class RecipeList extends Component {
    constructor(props) {
        super(props)
         this.state = {
             currentRecipe: ''                      // This will hold the recipe object selected by the user.
         }
    }

    handleClick = () => {                           // This will display only one selected recipe.
        this.setState({
          currentRecipe: this.props.recipe          // This will assign the selected recipe to the currentRecipe variable.
        })
    }

    render() {
        console.log(this.props)  
        return (
            <div className='recipe-card'>
                <img className='recipe-images' src={this.props.recipe.image} alt={this.props.recipe.label} />
                <Link to ={`recipe/${this.props.index}`} key={this.props.index}> 
                    <h2>{this.props.recipe.label}</h2>
                </Link>
                <p className='recipe-header'>Ingredients:</p>
                <ul>{this.props.recipe.ingredientLines.map((ingredient, index) => (
                    <li className='recipe-ingredient-list' key={index}>
                    {ingredient}
                    </li> ))}
                </ul>
                <p className='recipe-total'>
                    <span className='recipe-header'>Total calories (per yield):</span>
                    {(Math.floor((this.props.recipe.calories/this.props.recipe.yield)/10))}
                </p>  
                <p className='recipe-total'>
                    <span className='recipe-header'>Total yield (per recipe):</span>
                    {this.props.recipe.yield}
                </p>
                <div onClick={this.handleClick}>  
                    <RecipeDetails recipe={this.state.currentRecipe} />
                </div>
            </div>
        )
    }      
}

export default RecipeList