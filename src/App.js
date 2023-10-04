import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./componet/login";
import Register from "./componet/Register";
import Navbar from "./componet/Navbar";
import LandingPage from "./componet/LandingPage";
import ApplicationFormPage from "./componet/ApplicationFormPage";
import SuccessPage from "./componet/SuccessPage";
// import JobDetail from "./componet/Job-search";

function App() {
  const isUserLoggedIn = localStorage.getItem("registrationData");

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/applypage" element={<ApplicationFormPage />} />
          <Route path="/successpage" element={<SuccessPage />} />
          {isUserLoggedIn ? (
            <Route path="/" element={<LandingPage />} />
          ) : (
            <Route path="/*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
