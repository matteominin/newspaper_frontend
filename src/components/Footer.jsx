import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import tiktok from '../assets/tiktok.svg'
import bluesky from '../assets/bluesky.svg'
import arrow from '../assets/arrow.svg'
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <button className="scroll-button" onClick={() => window.scrollTo(0, 0)}>
                <img src={arrow} alt="arrow icon" />
            </button>
            <div className="footer__left">
                <a className="logo" href="/">LOGO</a>
                <div className="footer__left__socials">
                    <img src={facebook} alt="facebook logo" />
                    <img src={twitter} alt="twitter logo" />
                    <img src={instagram} alt="instragram logo" />
                    <img src={tiktok} alt="tiktok logo" />
                    <img src={bluesky} alt="bluesky logo" />
                </div>
            </div>

            <div className="footer__right">
                <div className="footer__right__section">
                    <h4>About</h4>
                    <button>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Our Company</a>
                    <a href="#">Careers</a>
                    <a href="#">Our Use of AI</a>
                    <a href="#">Ethics Policy</a>
                </div>
                <div className="footer__right__section">
                    <h4>Contact</h4>
                    <button>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Newsroom Contacts</a>
                </div>
                <div className="footer__right__section">
                    <h4>Services</h4>
                    <button>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Advertise with us</a>
                    <a href="#">Classifieds</a>
                    <a href="#">Recruitment</a>
                </div>
                <div className="footer__right__section">
                    <h4>Quick Links</h4>
                    <button>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Cars</a>
                    <a href="#">Jobs</a>
                    <a href="#">Weather</a>
                    <a href="#">Obituaries</a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;