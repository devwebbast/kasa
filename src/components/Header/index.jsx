import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './header.css'
function Header (){
    return(
        <nav>
            <div className="header-style">
                <img className='logo' src={logo} alt='Logo Kasa' />
                <div className="nav-link">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header