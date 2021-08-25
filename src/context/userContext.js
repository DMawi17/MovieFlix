import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    //..
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //..
    const doLogin = (e) => {
        e.preventDefault();

        if (email !== "lea@example.org") {
            alert("Invalid email");
            return;
        }
        setUser({ id: 1, email, name: "Joel Nenotlep", role: "admin" });
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
