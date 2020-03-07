import React from 'react'   

const NewSearch = (props) => {
    console.log(props)
    return (
        <nav className='reset-link' onClick={props.refreshPage}>
            New Search
        </nav>
    )
}

export default NewSearch;