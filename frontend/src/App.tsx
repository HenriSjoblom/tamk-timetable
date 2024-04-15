// tailwind
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pingServer } from "./services/info";
import LoginForm from "./services/loginForm";
import RegisterForm from "./services/registerForm";
import Timetable from "./components/Timetable";
import LogoutButton from "./services/logout";
import LandingPage from "./components/LandingPage";

const App = () => {
  // check server status, check if token exists
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(localStorage.getItem("token") as string);
    }
    pingServer();
  }, []);

  const [user, setUser] = useState("");

  // if user isn't logged in, show landing page
  return (
    <Router>
      <div>
        <ToastContainer />
        <Timetable />
        <LogoutButton/>
        {user ? <Timetable /> : <LandingPage />}
      </div>
      <Routes>
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
