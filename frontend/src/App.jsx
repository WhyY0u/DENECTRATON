import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import './globals.css'

function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" index/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  )
}

export default App
