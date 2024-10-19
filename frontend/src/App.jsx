import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import './globals.css'
import LoginPage from "./pages/LoginPage/LoginPage";
import Choice from "./components/Choice/Choice";
import ProfilePageCompany from "./pages/ProfilePageCompany/ProfilePageCompany";


function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/profile-page-company" element={<ProfilePageCompany />}/>
      </Routes>
    </div>
  )
}

export default App
