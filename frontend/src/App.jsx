import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";


function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" />



      </Routes>
    </div>
  )
}

export default App
