import React from 'react'

// Set up this component as a function that displays the recipe details once the user selects a recipe displayed after selecting submit.
const RecipeDetails = (props) => {
    console.log(props.recipes[props.match.params.index])

    const recipe = props.recipes[props.match.params.index]

    return(
        <div className='recipe-details-section'>            
            <div className='recipe-details-top-section'>
                <img className='recipe-details-images' src={recipe.recipe.image} alt={recipe.recipe.label} />
                <div>
                    <h1>{recipe.recipe.label}</h1>
                    <p>
                        <span className='recipe-details-subtitles'>Total Calories:</span>
                            {(Math.floor(recipe.recipe.calories/recipe.recipe.yield))}
                    </p>
                    <p>
                        <span className='recipe-details-subtitles'>Total Servings:</span>
                            {recipe.recipe.yield}
                    </p>
                    <div className='recipe-details-url'>
                        <a target='_blank' href={recipe.recipe.url} rel="noopener noreferrer">
                            Click here for directions
                        </a>
                    </div>
                </div>
            </div>
            <div className='recipe-details-bottom-section'>
                <div className='recipe-details-ingredient-section'>
                    <p className='recipe-details-subtitles'>
                        {recipe.recipe.ingredientLines.length} - Ingredients:</p>
                    <div>
                    <ul>{recipe.recipe.ingredientLines.map((ingredient, index) => (
                        <li className='recipe-ingredient-list' 
                            key={index}>
                            {ingredient}
                        </li> ))}
                    </ul>
                    </div>
                </div>
                <div className='recipe-details-nutritional-info'>
                    <p className='recipe-details-subtitles'>
                        Nutrition:</p>
                    <div>
                        <ul>{recipe.recipe.digest.map((nutrient, index) => (
                            <li key={index} className='recipe-ingredient-list'>
                                <span className='recipe-details-nutrition-title'>{nutrient.label}:</span>
                                {Math.floor(nutrient.total/recipe.recipe.yield)} {nutrient.unit}
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}   
export default RecipeDetails