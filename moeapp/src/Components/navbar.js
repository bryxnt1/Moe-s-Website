import React, {useState} from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const [click, setClick] = 
    return (
    <nav className="navbar">
        <div className='navbar-container'>
            <link to="/" className='navbar-logo'>
                TRVL <i className='fab fa-typo'/>
            </link>
            <div className='Menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
        </div>
    </nav>
    )
}
export default Navbar