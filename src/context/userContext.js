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
        // e.preventDefault();

        if (email !== "lea@example.org") {
            alert("Invalid email");
            return;
        }
        setUser({ id: 1, email, name: "Lea", role: "admin" });
    };

    //..

    const doSignUp = (e) => {
        e.preventDefault();

        if (email === "lea@example.org") {
            alert(
                "There's already an account registered with that email address. Go to Login."
            );
            //     return (<Redirect to="/" />)
            return;
        }
        if (password !== confirmPassword) {
            alert("Password versions are different. Enter password again.");
            return;
        }

        setUser({ id: 1, email, name: `${firstName} ${lastName}` });
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
