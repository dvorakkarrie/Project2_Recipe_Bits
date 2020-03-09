import React from 'react'
import { Link } from 'react-router-dom';

// Imported components
import RecipeURL from './RecipeURL'

// Set up this component as a function that displays the external url in a new tab.
const RecipeDetails = (props) => {
    console.log(this.props)
    return(
        <div className='recipe-page'>
        <img className='recipe-images' src={props.recipe.image} alt={props.recipe.label} />
        <Link to ={`recipe/${props.index}`} key={props.index}> 
            <h2>{props.recipe.label}</h2>
        </Link>
        <p className='recipe-header'>Ingredients:</p>
        <ul>{props.recipe.ingredientLines.map((ingredient, index) => (
            <li className='recipe-ingredient-list' key={index}>
            {ingredient}
            </li> ))}
        </ul>
        <p className='recipe-total'>
            <span className='recipe-header'>Total calories (per yield):</span>
            {(Math.floor((props.recipe.calories/props.recipe.yield)/10))}
        </p>  
        <p className='recipe-total'>
            <span className='recipe-header'>Total yield (per recipe):</span>
            {props.recipe.yield}
        </p>
        <div onClick={this.handleClick}>  
            <RecipeURL recipe={props.currentRecipe} />
        </div>
    </div>
    )
}   
export default RecipeDetails