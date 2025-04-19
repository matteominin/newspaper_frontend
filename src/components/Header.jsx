import menu from '../assets/menu.png';
import '../css/header.css'

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__left">
                    <button>
                        <img src={menu} alt="menu icon" />
                    </button>
                    <a href="/" className='logo'>
                        LOGO
                    </a>
                </div>
                <nav className="header__right">
                    <div className="header__right__cta">
                        <a className="newsletter" href="#">Newsletters</a>
                        <a className="sign_in" href="#">Sign in</a>
                    </div>
                    <ul>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Sport</a>
                        </li>
                        <li>
                            <a href="#">Local</a>
                        </li>
                        <li>
                            <a href="#">Food</a>
                        </li>
                        <li>
                            <a href="#">Travel</a>
                        </li>
                        <li>
                            <a href="#">Culture</a>
                        </li>
                        <li>
                            <a href="#">Tahoe</a>
                        </li>
                        <li>
                            <a href="#">Calif.</a>
                        </li>
                        <li>
                            <a href="#">National Parks</a>
                        </li>
                        <li>
                            <a href="#">Real Estate</a>
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