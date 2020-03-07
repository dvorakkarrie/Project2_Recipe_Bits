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
                <h2>{this.props.recipe.label}</h2>
                <p className='recipe-header'>Ingredients:</p>
                <ul>{this.props.recipe.ingredientLines.map((ingredient, index) => (
                    <li className='recipe-ingredient-list' key={index}>
                    {ingredient}
                    </li> ))}
                </ul>
                <p className='recipe-total'>
                    <span className='recipe-header'>Total calories (per yield):</span>
                    {(Math.floor((this.props.recipe.calories/this.props.recipe.yield)/10))}
                </p>  
                <p className='recipe-total'>
                    <span className='recipe-header'>Total yield (per recipe):</span>
                    {this.props.recipe.yield}
                </p>
                <div onClick={this.handleClick}>  
                    <RecipeDetails recipe={this.state.currentRecipe} />
                </div>
            </div>
        )
    }      
}
export default RecipeList