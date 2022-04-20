import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h2 className="footer__title">Mawi</h2>
                        <span className="footer__subtitle">Web Developer</span>
                    </div>

                    <ul className="footer__links">
                        {footer.map((li) => {
                            const UpperCaseLink =
                                li.charAt(0).toUpperCase() + li.slice(1);
                            return (
                                <li key={v4()}>
                                    <a href={`#${li}`} className="footer__link">
                                        {UpperCaseLink}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="footer__socials">
                        {socialBtn.map((social) => (
                            <SocialsFooterBtn key={v4()} {...social} />
                        ))}
                    </div>
                </div>

                <p className="footer__copy">
                    &#169;2022 Dagmawi Asegid <br />
                    Illustration by{" "}
                    <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
                        Icons 8
                    </a>{" "}
                    from <a href="https://icons8.com/illustrations">Ouch!</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
