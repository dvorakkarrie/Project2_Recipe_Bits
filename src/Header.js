import React from 'react'

// set up this component as a function that displays the web page title.
const Header = (props) => {
    return (
        <div className='header'>
            <h1>Recipe Bits</h1>
            {/* <Link to='/'><p className='header-home-link' onClick={props.reset}>New Search</p></Link> */}

        </div>
    )
}

export default Header;