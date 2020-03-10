import React from 'react'
import {Link } from 'react-router-dom'

// set up this component as a function that displays the title.
const Header = (props) => {
    return (
        <div className='header'>
            <h1>Recipe Bits</h1>
            <Link to='/'><p className='header-home-link' 
                style={{ visibility: props.showList ? 'hidden' : 'visible' }}>
                Home</p></Link>
        </div>
    )
}

export default Header;