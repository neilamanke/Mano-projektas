import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

export const Login = () => {
  const [loginUser, setLoginUser] = useState();
  const { login } = useContext(AuthContext);

  const handleInput = (e) => {
    setLoginUser(e.target.value);
  };

  const handleLogin = () => {
    login(loginUser);
  };

  return (
    <>
      <h1>Login Page</h1>
      <label> Name:</label>
      <input onChange={handleInput} type="text" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
