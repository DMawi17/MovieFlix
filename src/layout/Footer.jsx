import { Link } from "react-router-dom";
import { useMovie } from "../helpers/movie-hooks";
import { v4 } from "uuid";

function Footer() {
    const { navElements } = useMovie();

    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <section className="footer__left">
                    <span to="/" className="footer__logo">
                        MovieSt
                    </span>
                    <p className="footer__about">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Numquam at incidunt, excepturi facere ut beatae
                        itaque modi mollitia quisquam. Architecto officia quidem
                        eum animi hic quam! Fuga animi culpa voluptates.
                    </p>

                    <span className="footer__contact">
                        <h3 className="footer__left-title">Contact</h3>
                        <a href="/">Email</a>
                    </span>
                </section>

                <section className="footer__right">
                    <h3 className="footer__right-title">Links</h3>
                    <ul className="footer__links">
                        {navElements.map((el) => (
                            <li key={v4()} className="nav__item">
                                <Link
                                    to={`${el.path}`}
                                    className={`nav__link nav__${el.path}`}
                                >
                                    {el.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="footer__socials"></div>
                </section>
            </div>

            <div className="footer__copy">
                <p className="footer__all-right">
                    &#169;2022 Dagmawi Asegid <br />
                </p>
                <p className="footer__attribute">
                    All film-related metadata used in Letterboxd, including
                    actor, director and studio names, synopses, release dates,
                    trailers and poster art is supplied by The
                    <a href="https://www.themoviedb.org/">
                        {" "}
                        Movie Database
                    </a>{" "}
                    (TMDb).
                </p>
            </div>
        </footer>
    );
}

export default Footer;
