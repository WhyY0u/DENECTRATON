import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import './globals.css'
import LoginPage from "./pages/LoginPage/LoginPage";
import Choice from "./components/Choice/Choice";
import Email from "./components/Email/Email";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";


function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/userprofile" element={<UserProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
