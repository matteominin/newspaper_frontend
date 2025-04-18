import { useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import '../css/header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="header">
                <div className="header__left">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={menu} alt="menu icon" />
                    </button>
                    <a href="/" className='logo'>
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <nav className="header__right">
                    <div className="header__right__cta">
                        <a className="newsletter" href="newsletter">Newsletters</a>
                        <a className="sign_in" href="sign-in">Sign in</a>
                    </div>
                    <ul>
                        <li>
                            <a href="news">News</a>
                        </li>
                        <li>
                            <a href="sport">Sport</a>
                        </li>
                        <li>
                            <a href="#local">Local</a>
                        </li>
                        <li>
                            <a href="#food">Food</a>
                        </li>
                        <li>
                            <a href="#trave">Trave</a>
                        </li>
                        <li>
                            <a href="#culture">Culture</a>
                        </li>
                        <li>
                            <a href="#Tahoe">Tahoe</a>
                        </li>
                        <li>
                            <a href="#calif">Calif.</a>
                        </li>
                        <li>
                            <a href="#national-parks">National Parks</a>
                        </li>
                        <li>
                            <a href="#real-estate">Real Estate</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <a className="newsletter-mobile" href="#">
                Newsletters
            </a>
        </header>
    )
}

export default Header;