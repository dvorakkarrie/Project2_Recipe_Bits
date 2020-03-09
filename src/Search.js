import React from 'react'

// set up this component as a function that submits the search in order to retrieve data from Edamam.
const Search = (props) => {

    const itemLimit = `Displays maximum of ${props.maxRecipes} recipes`            // This will display the maximum recipe comment in the search section.

    return (
        <form onSubmit={props.handleSubmitSearch}>
            <label>List ingredients:</label>
            <input type='text' className='search-box' 
                placeholder="i.e. chicken, ice cream" 
                onChange={props.handleChangeSearch} 
                value={props.searchText || ''}>{props.value}
            </input>
            <div>
                <label>Calories:</label>
                <input type='text' className='calories-box' 
                    placeholder='From' 
                    onChange={props.handleChangeMinCalories} 
                    value={props.minCalories || ''}>
                        {props.value}
                </input>
                <input type='text' className='calories-box' 
                    placeholder='To' 
                    onChange={props.handleChangeMaxCalories} 
                    value={props.maxCalories || ''}>
                        {props.value}
                </input>
            </div>
            <p className='search-max'>{itemLimit}</p>
            <button type='button' className='search-button' 
                onClick={props.handleSubmitSearch}>
                Search
            </button>
            <input type='submit' style={{display: 'none'}}></input>      
        </form>
    )
}

 export default Search;