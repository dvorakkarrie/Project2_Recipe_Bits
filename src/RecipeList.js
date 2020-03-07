import React, {Component} from 'react'
import RecipeDetails from './RecipeDetails'

class RecipeList extends Component {
    constructor(props) {
        super(props)
         this.state = {
             currentRecipe: ''
         }
    }

    handleClick = () => {           // This will display only one selected recipe.
        console.log(this.props.url)
        this.setState({
          currentRecipe: this.props.recipe        // This will assign the selected recipe to the currentRecipe variable.
        })
        console.log(this.state.currentRecipe)
      }

    render() {
        console.log(this.props.recipe);
        
        return (
            <div className='recipe-card'>
                <img className='recipe-images' src={this.props.recipe.image} alt={this.props.recipe.title}></img>
                <h1>{this.props.recipe.title}</h1>
                <ul>{this.props.recipe.ingredients.map((ingredient, index) => (
                <li className='recipe-ingredient-list' key={index}>
                    {ingredient.text}
                    </li> ))}
                </ul>
                <p className='recipe-total-calories'>Total calories (per yield):{'  '}
                    { (Math.floor((this.props.recipe.calories/this.props.recipe.yield)/10))}
                </p>  
                <div onClick={this.handleClick}>Details   
                    <RecipeDetails recipe={this.state.currentRecipe} />
                </div>
            </div>
        )
    }      
}
export default RecipeList