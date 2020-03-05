import React from 'react'

const RecipeList = ({title,calories,image,ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>{ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient.text}
                </li>
            ))}
            </ul>
            <p>Total calories: {calories}</p>
            <img src={image} alt={title}></img>
        </div>
    )
}
export default RecipeList