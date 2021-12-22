import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useMovie } from "../../context/movie-hooks";

const SignUp = () => {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        doSignUp,
        termsRead,
        setTermsRead,
    } = useUser();

    const { bannerPic } = useMovie();

    return (
        <div
            id="FormBG"
            style={{
                backgroundSize: "1",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerPic?.backdrop_path}"`,
                backgroundPosition: "center center",
            }}
        >
            <div className="SignUp">
                <div id="Sign_Logo">
                    <a href="/">
                        movie<span>Flix</span>
                    </a>
                </div>
                <h2>Sign up</h2>
                <form className="Form" onSubmit={doSignUp}>
                    <input
                        className="Input"
                        placeholder="First name"
                        type="text"
                        value={firstName}
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input
                        className="Input"
                        placeholder="Last name"
                        type="text"
                        value={lastName}
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <input
                        className="Input"
                        placeholder="Email address"
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="Input"
                        placeholder="Password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="Input"
                        placeholder="Confirm password"
                        type="password"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className="Checkbox">
                        <input
                            type="checkbox"
                            value={termsRead}
                            id="terms"
                            name="terms"
                            onChange={(e) => setTermsRead(e.target.value)}
                        />
                        <label for="terms">
                            <a
                                className="Term_Link"
                                href="https://www.websitepolicies.com/blog/what-are-terms-and-conditions"
                            >
                                I've read the Terms & Conditions.
                            </a>
                        </label>
                    </div>

                    <button className="Register" type="submit">
                        Sign Up
                    </button>

                    <div id="Go_Login">
                        <p>Have an account already? </p>
                        <span>
                            <Link className="Link" to="/">
                                Log in here
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
