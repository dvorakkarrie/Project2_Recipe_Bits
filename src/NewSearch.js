import React from 'react'   

// Set up this component as a function that refreshes and hides/displays the New Search link.
const NewSearch = (props) => {
    return (
        <div className='reset-link' onClick={props.refreshPage} 
            style={{ visibility: props.isOpen ? 'hidden' : 'visible' }}>
            New Search
        </div>
    )
}

export default NewSearch;