import React from 'react'

// set up this component as a function that displays the external url in a new tab.
const RecipeDetails = (props) => {
    return(
        <div className='detail-section'>
            <a target='_blank' href={props.recipe.url} rel="noopener noreferrer">
                Click here for directions
            </a>
        </div>
    )
}   
export default RecipeDetails