import React from 'react'

// Set up this component as a function that displays the recipe details once the user selects a recipe displayed after selecting submit.
const RecipeDetails = (props) => {
    console.log(props.recipes[props.match.params.index])

    const recipe = props.recipes[props.match.params.index]

    return(
        <div className='recipe-details-section'>            
                <div>
                    <img className='recipe-details-images' src={recipe.recipe.image} alt={recipe.recipe.label} />
                    <h1>{recipe.recipe.label}</h1>
                </div>
                <div>
                    
                    <div className='recipe-total'>
                        <p><span className='recipe-details-header'>Total Calories:</span>
                            {(Math.floor((recipe.recipe.calories/recipe.recipe.yield)))}
                        </p>  
                        <p><span className='recipe-details-header'>Total Yield:</span>
                            {recipe.recipe.yield}
                        </p>
                    </div>
                    <div>
                    <p className='recipe-details-header'>{recipe.recipe.ingredientLines.length} - Ingredients:</p>
                    <ul>{recipe.recipe.ingredientLines.map((ingredient, index) => (
                        <li className='recipe-ingredient-list' 
                            key={index}>
                            {ingredient}
                        </li> ))}
                    </ul>
                    </div>
                </div>
                
                
                
                
    </div>
    )
}   
export default RecipeDetails