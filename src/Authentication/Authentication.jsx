import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const Authentication = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user.username) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Authentication;
