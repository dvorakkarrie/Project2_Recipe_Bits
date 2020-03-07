import React from 'react'

const RecipeDetails = (props) => {
    console.log(props)
    return(
        <div className='detail-section'>
            {props.label}
            <div><a target='_blank' href={props.url} rel="noopener noreferrer">Directions</a></div>
        </div>
    )
}   
export default RecipeDetails