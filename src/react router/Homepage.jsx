import "./style.css";
import { Outlet } from "react-router-dom";
export const Homepage = () => {
  return (
    <>
      <div className="container">
        <h1 className="word">Homepage</h1>
      </div>
      <Outlet />
    </>
  );
};
