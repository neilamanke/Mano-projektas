import { useContext } from "react"
import { AuthContext } from "../Authentication/AuthProvider"

export const Profile = () => {

    const {user, logout} = useContext(AuthContext);

    const handleLogout = () =>{
        logout();
    };

    return(
        <>
        <h1>Welcome {user.username} </h1>
        <button onClick={handleLogout}> Logout</button>
       
        </>
    )
}