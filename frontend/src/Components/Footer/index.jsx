// Footer.jsx
import "./style.scss";
import MusicPlayer from "./Music"; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Company</h2>
                <p className="footer-description">Find us here!</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/olimxon-akhmatov-b2343532a/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/olimxon__313/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://github.com/olimxon313" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                    <a href="https://t.me/olimx9n" target="_blank" rel="noopener noreferrer" className="social-link">Telegram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Click Craft. All rights reserved.</p>
            </div>
            <MusicPlayer /> 
        </footer>
    );
}

export default Footer;
