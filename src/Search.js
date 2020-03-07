import React from 'react'

const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmitSearch}>
                <h4>List ingredients:</h4>
                <input type='text' className='search-box' 
                    placeholder="i.e. chicken, ice cream" 
                    onChange={props.handleChangeSearch} 
                    value={props.searchText}>
                </input>
                <div>
                    <h4>Calories:</h4>
                    <input type='text' className='calories-box' 
                        placeholder='From' 
                        onChange={props.handleChangeCaloriesFrom} 
                        value={props.caloriesFrom}>{props.value}
                    </input>{' '}
                    <input type='text' className='calories-box' 
                        placeholder='To' 
                        onChange={props.handleChangeCaloriesTo} 
                        value={props.caloriesTo}>{props.value}
                    </input>
                </div>
                <p className='search-max'>maximum of 10 items displayed</p>
                <button type='button' className='search-button' 
                    onClick={props.handleSubmitSearch}>
                    Search
                </button>        
            </form>
        </div>
    )
}
 export default Search;