import React from 'react'

// Set up this component as a function that displays the external url in a new tab.
const RecipeURL
 = (props) => {
    return(
        <div className='url-section'>
            <a target='_blank' href={props.recipe.url} rel="noopener noreferrer">
                Click here for directions
            </a>
        </div>
    )
}   
export default RecipeURL