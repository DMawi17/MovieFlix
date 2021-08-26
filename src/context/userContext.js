import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    //..
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //..

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newUser, setNewUser] = useState("");

    //..

    const doLogin = (e) => {
        e.preventDefault();

        if (email !== "lea@example.org") {
            alert("Invalid email");
            return;
        }
        setUser({ id: 1, email, name: "Lea", role: "admin" });
    };

    //..

    const doSignUp = (e) => {
        e.preventDefault();

        // if (user !== "") { FIXME:
        if (email === "lea@example.org") {
            alert("You're already signed up. Go to Login.");
        } else if (password !== confirmPassword) {
            alert("Password versions are different. Enter password again.");
            return;
        }

        setNewUser({ id: 1, email, name: `${firstName} ${lastName}` });
    };

    //..

    return (
        <UserContext.Provider
            value={{
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
                newUser,
                setNewUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
