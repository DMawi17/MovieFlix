import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newUser, setNewUser] = useState("");
    const [termsRead, setTermsRead] = useState(false);

    const doLogin = () => {};

    const doSignUp = (e) => {
        e.preventDefault();
    };

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
                termsRead,
                setTermsRead,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
