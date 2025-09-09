import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SoilAdvisory from "./pages/SoilAdvisory";
import WeatherPage from "./pages/WeatherPage";
import Market from "./pages/Market";
import DiseaseDetect from "./pages/DiseaseDetect";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-green-700">PAW Patrol</Link>
          <nav className="space-x-4">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/soil">Soil</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/market">Market</Link>
            <Link to="/detect">Detect</Link>
            <Link to="/chat">Chat</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/soil" element={<SoilAdvisory />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/market" element={<Market />} />
          <Route path="/detect" element={<DiseaseDetect />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
      </main>

      <footer className="bg-white border-t text-sm text-slate-500 py-4 text-center">
        © {new Date().getFullYear()} PAW Patrol — SIH 2025
      </footer>
    </div>
  );
}

export default App;
