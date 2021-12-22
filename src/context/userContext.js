import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserEndpoint } from "../api/request";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    // Login state
    const [data, setData] = useState({});
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // SignUp state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsRead, setTermsRead] = useState(false);

    useEffect(() => {
        axios.get(UserEndpoint).then((res) => setData(res.data));
    }, []);

    // SignUp Function
    const doSignUp = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password };

        if (confirmPassword === password) {
            axios
                .post(UserEndpoint, newUser)
                .then(() => alert("Account Successfully Created!"))
                .catch((err) => console.error("Uhh oh!", err));
        } else {
            alert("Password do not match, please try again!");
        }
    };

    // Login Function
    const doLogin = () => {
        const corrUser = data.filter(
            (d) => email === d.email && password === d.password
        );

        if (corrUser.length) {
            setUser(data);
        } else {
            alert("Incorrect email or password, please try again!");
        }
    };

    return (
        <UserContext.Provider
            value={{
                data,
                setData,
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                doLogin,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                confirmPassword,
                setConfirmPassword,
                doSignUp,
                termsRead,
                setTermsRead,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
