import React from 'react'

const RecipeDetails = (props) => {
    console.log(props)
    return(
        <div className='detail-section'>
            <a target='_blank' href={props.recipe.url} rel="noopener noreferrer">
                Click here for directions
            </a>
        </div>
    )
}   
export default RecipeDetails