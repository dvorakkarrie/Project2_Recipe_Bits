import React, {Component} from 'react'

class Sidebar extends Component {

    render() {

        return (
            <div>
                <form className='search-form' onSubmit={this.props.handleSubmit}>
              <input type='text' className='search-box' 
                placeholder="i.e. chicken, ice cream" onChange={this.props.handleChange} 
                value={this.props.searchText}>{this.props.value}</input>         
              <button type='button' className='search-button' 
                onClick={this.props.handleSubmit}>Search
              </button>        
            </form>
    
            </div>
            
        )
    }
    
}
 export default Sidebar;