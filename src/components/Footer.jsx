import { useState } from 'react';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';
import bluesky from '../assets/bluesky.svg';
import arrow from '../assets/arrow.svg';
import '../css/footer.css';

const Footer = () => {
    const [openSections, setOpenSections] = useState({
        about: false,
        contact: false,
        services: false,
        quickLinks: false
    });

    const toggleSection = (section) => {
        setOpenSections(prevState => {
            const newState = {
                about: false,
                contact: false,
                services: false,
                quickLinks: false
            };
            newState[section] = !prevState[section];

            return newState;
        });
    };


    return (
        <footer>
            <button className="scroll-button" onClick={() => window.scrollTo(0, 0)}>
                <img src={arrow} alt="arrow icon" />
            </button>
            <div className="footer__left">
                <a className="logo" href="/">LOGO</a>
                <div className="footer__left__socials">
                    <a href="#"><img src={facebook} alt="facebook logo" /></a>
                    <a href="#"><img src={twitter} alt="twitter logo" /></a>
                    <a href="#"><img src={instagram} alt="instagram logo" /></a>
                    <a href="#"><img src={tiktok} alt="tiktok logo" /></a>
                    <a href="#"><img src={bluesky} alt="bluesky logo" /></a>
                </div>
            </div>

            <nav className="footer__right">
                {/* About Section */}
                <div className={`footer__right__section ${openSections.about ? 'active' : ''}`}>
                    <h4>About</h4>
                    <button onClick={() => toggleSection('about')}>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Our Company</a>
                    <a href="#">Careers</a>
                    <a href="#">Our Use of AI</a>
                    <a href="#">Ethics Policy</a>
                </div>

                {/* Contact Section */}
                <div className={`footer__right__section ${openSections.contact ? 'active' : ''}`}>
                    <h4>Contact</h4>
                    <button onClick={() => toggleSection('contact')}>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Newsroom Contacts</a>
                </div>

                {/* Services Section */}
                <div className={`footer__right__section ${openSections.services ? 'active' : ''}`}>
                    <h4>Services</h4>
                    <button onClick={() => toggleSection('services')}>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Advertise with us</a>
                    <a href="#">Classifieds</a>
                    <a href="#">Recruitment</a>
                </div>

                {/* Quick Links Section */}
                <div className={`footer__right__section ${openSections.quickLinks ? 'active' : ''}`}>
                    <h4>Quick Links</h4>
                    <button onClick={() => toggleSection('quickLinks')}>
                        <img src={arrow} alt="down arrow" />
                    </button>
                    <a href="#">Cars</a>
                    <a href="#">Jobs</a>
                    <a href="#">Weather</a>
                    <a href="#">Obituaries</a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
