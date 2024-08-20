import Index from "./pages/Index";
import "./style/style.css";
import "./style/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:8080/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
      localStorage.setItem("user", JSON.stringify(data.user._json));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return (
      <>
      <Index />
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Signup />} />
        </Routes> */}
      </>
    );
  } else {
    return (
      <>
        <Index />
      </>
    );
    
  }
}

export default App;
