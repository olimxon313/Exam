import "./style.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Olimxon & Asad</h2>
                <p className="footer-description">Colleagues creating amazing projects together!</p>
                <div className="socials">
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">GitHub</a>
                    <a href="#" className="social-link">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Olimxon & Asad. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
