import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import CareerPath from "./pages/CareerPath";
import ResumeBuilder from "./pages/ResumeBuilder";
import Interview from "./pages/Interview";
import Assistant from "./pages/Assistant";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/career-path" element={<CareerPath />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </div>
    </div>
  );
}
