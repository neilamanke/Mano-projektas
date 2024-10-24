import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ProductList } from "../ProductList";
import { ThemeContext } from "../useContext/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./react router/Homepage";
import { Contacts } from "./react router/Contacts";
import { NotFound } from "./react router/404";
import { Login } from "./react router/Login";
import { Profile } from "./react router/Profile";
import { PostDetails } from "./react router/PostDetails";
import { Navigation } from "./react router/Navigation";
import Authorization from "./Authentication/Authorization";
import PERMISSIONS from "./Authentication/permissions";
import { About } from "./react router/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />

        <Route
          element={
            <Authorization Permissions={[PERMISSIONS.CAN_UPDATE_PRODUCTS]} />
          }
        >
          <Route path="/contacts" element={<Contacts />} />
          
        </Route>
        <Route path="/productList" element={<ProductList/>} />
        <Route element={
          <Authorization PERMISSIONS={[PERMISSIONS.CAN_UPDATE_PRODUCTS]}/>
        }>
        <Route pathe="/about" element={<About/>}/>
        </Route>
        <Route path="/productList/:title" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
