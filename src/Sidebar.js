import React, {Component} from 'react'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <form className='search-form' onSubmit={this.props.handleSubmitSearch}>
                    <h4>List ingredients:</h4>
                    <input type='text' className='search-box' 
                        placeholder="i.e. chicken, ice cream" onChange={this.props.handleChangeSearch} 
                        value={this.props.searchText}>{this.props.value}</input>
                    <p>maximum of 10 items displayed</p>
                    <div>
                        <h5>Calories:</h5>
                        <input type='text' placeholder='From' onChange={this.props.handleChangeCaloriesFrom} value={this.props.caloriesFrom}>{this.props.value}</input>{' '}
                        <input type='text' placeholder='To' onChange={this.props.handleChangeCaloriesTo} value={this.props.caloriesTo}>{this.props.value}</input>
                    </div>
                    <button type='button' className='search-button' onClick={this.props.handleSubmitSearch}>
                        Search
                    </button>        
                </form>
            </div>
        )
    }
}
 export default Sidebar;