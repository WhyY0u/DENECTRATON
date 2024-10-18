import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import './globals.css'
import LoginPage from "./pages/LoginPage/LoginPage";
import Choice from "./components/Choice/Choice";


function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  )
}

export default App
