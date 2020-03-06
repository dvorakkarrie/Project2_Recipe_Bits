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
        console.log(this.props.selectedRecipe)
        this.setState({
          currentRecipe: this.props.selectedRecipe        // This will assign the selected recipe to the currentRecipe variable.
        })
        console.log(this.state.currentRecipe)
      }

    render() {
        console.log(this.props.selectedRecipe);
        
        return (
            <div onClick={this.handleClick}>
                <h1>{this.props.title}</h1>
                <ul>{this.props.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.text}
                    </li> ))}
                </ul>
                <p>Total calories (per yield): {this.props.calories}</p>
                <img src={this.props.image} alt={this.props.title}></img>
                <RecipeDetails
                    label={this.state.currentRecipe.label} 
                />
            </div>
        )
    }      
}
export default RecipeList