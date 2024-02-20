import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <Router>
        <nav className="navbar">
            <div className='navbar-container'>
                <link to="/" className='navbar-logo'>
                </link>
                <div className='Menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
              </li>
                </ul>
            </div>
        </nav>
    </Router>
    )
}
export default Navbar