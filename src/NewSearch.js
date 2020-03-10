import React from 'react'

// Created this component as a function that toggles with the Search sidebar to clear inputted data for user to start a new search.
const NewSearch = (props) => {
    return (
        <div className='new-search-link' onClick={props.reset} 
            style={{ visibility: props.isOpen ? 'hidden' : 'visible' }}>
                New Search
        </div>
    )
}	
export default NewSearch;