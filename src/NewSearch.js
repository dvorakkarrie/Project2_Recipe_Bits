import React from 'react'   

const NewSearch = (props) => {
    console.log(props)
    return (
        <div className='reset-link' onClick={props.refreshPage} 
            style={{ visibility: props.isOpen ? 'hidden' : 'visible' }}>
            New Search
        </div>
    )
}

export default NewSearch;