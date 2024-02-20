import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

 const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                Pursuit.bet
            </Link>
            <div className='Menu-icon' onClick={handleClick}>
            <i className={click ? '' : '' } />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
          </li>
          <li className='nav-crypto'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Contact
            </Link>
          </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar