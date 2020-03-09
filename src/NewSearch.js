import React from 'react'

const NewSearch = (props) => {
    return (
        <div className='reset-link' onClick={props.reset} 
            style={{ visibility: props.isOpen ? 'hidden' : 'visible' }}>
                New Search
        </div>
    )
}	
export default NewSearch;