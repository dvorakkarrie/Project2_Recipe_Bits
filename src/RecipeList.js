import React from 'react'

const RecipeList = (props) => {
    return (
        <div onClick={() => props.handleClick(props.selectedRecipe)}>
            <h1>{props.title}</h1>
            <ul>{props.ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient.text}
                </li>
            ))}
            </ul>
            <p>Total calories (per yield): {props.calories}</p>
            <img src={props.image} alt={props.title}></img>
        </div>
    )
}
export default RecipeList