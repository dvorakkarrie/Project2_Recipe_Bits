import React from 'react'

// // Imported components
// import RecipeURL from './RecipeURL'

// Set up this component as a function that displays the recipe details once the user selects a recipe displayed after selecting submit.
const RecipeDetails = (props) => {
    console.log(props.recipes[props.match.params.index])

    const recipe = props.recipes[props.match.params.index]

    return(
        <div className='recipe-details-section'>
            <div>
                <h1>{recipe.recipe.label}</h1>
                <p className='recipe-header'>Ingredients:</p>
                <ul>{recipe.recipe.ingredientLines.map((ingredient, index) => (
                    <li className='recipe-ingredient-list' key={index}>
                        {ingredient}
                    </li> ))}
                </ul>
                <p className='recipe-total'>
                <span className='recipe-header'>Total calories (per yield):</span>
                    {(Math.floor((recipe.recipe.calories/recipe.recipe.yield)/10))}
                </p>  
                <p className='recipe-total'>
                    <span className='recipe-header'>Total yield (per recipe):</span>
                    {recipe.recipe.yield}
                </p>
            </div>
            <div>
                <img className='recipe-details-images' src={recipe.recipe.image} alt={recipe.recipe.label} />
            </div>
    </div>
    )
}   
export default RecipeDetails