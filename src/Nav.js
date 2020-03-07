import React from 'react'
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className='nav-header'>
            <Link to='/'>New Search</Link>
        </nav>
    )
}

export default Nav;