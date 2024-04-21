import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { pingServer } from "./services/info";
import LoginForm from "./services/loginForm";
import RegisterForm from "./services/registerForm";
import Timetable from "./components/Timetable";
import LandingPage from "./components/LandingPage";
import { User } from "./types";
import Header from "./components/Header";

const App = () => {
  const [user, setUser] = useState<User>();

  // check server status, check if token exists
  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem("user") || "{}") as User;
    console.log(cachedUser);
    if (cachedUser && cachedUser.validUntil > new Date().getTime()) {
      setUser(cachedUser);
    } else {
      console.log("Token expired or no user in local storage");
      localStorage.removeItem("user");
    }
    pingServer();
  }, []);

  // if user isn't logged in, show landing page
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header user={user} />
      <Routes>
        {user ? (
          <Route path="/" element={<Timetable />} />
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route
          path="/login"
          element={<LoginForm user={user} setUser={setUser} />}
        />
        <Route path="/register" element={<RegisterForm user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
