import React from "react"

export const baseUserContext = {
    user: null,
    setUser: () => {}
}

const UserContext = React.createContext(baseUserContext)
console.log(UserContext)
export default UserContext