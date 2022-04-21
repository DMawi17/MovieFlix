import Nav from "./Nav";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <section className="footer__left">
                    <span to="/" className="footer__logo">
                        MovieSt
                    </span>
                    <p className="footer__attribute">
                        All film-related metadata used in Letterboxd, including
                        actor, director and studio names, synopses, release
                        dates, trailers and poster art is supplied by The
                        <a
                            className="external__link"
                            href="https://www.themoviedb.org/"
                        >
                            {" "}
                            Movie Database
                        </a>{" "}
                        (TMDb).
                    </p>

                    <span className="footer__contact">
                        <h3 className="footer__left-title">Contact</h3>
                        <a href="mailto:asegda17@gmail.com">Send Email</a>
                    </span>
                </section>

                <section className="footer__right">
                    <h3 className="footer__right-title">Links</h3>
                    <Nav />
                    <div className="footer__socials"></div>
                </section>
            </div>

            <div className="footer__copy">
                <p className="footer__all-right">
                    &#169;2022 Dagmawi Asegid <br />
                </p>
            </div>
        </footer>
    );
}

export default Footer;
