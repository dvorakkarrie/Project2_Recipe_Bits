import React from 'react'

const NewSearch = (props) => {
    return (
        <div className='new-search-link' onClick={props.reset} 
            style={{ visibility: props.isOpen ? 'hidden' : 'visible' }}>
                New Search
        </div>
    )
}	
export default NewSearch;