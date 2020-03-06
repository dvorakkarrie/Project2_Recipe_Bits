import React from 'react'

// Import component
import Nav from './Nav'

const Header = () => {
    return (
        <div className='header'>
            <h1>Recipe Bits</h1>
            <Nav />
        </div>
    )
}

export default Header;