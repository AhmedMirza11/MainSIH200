import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="grid gap-6 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl font-bold text-green-800">
          AI-Powered Crop Advisory & Soil Intelligence
        </h1>
        <p className="mt-4 text-slate-700">
          Real-time personalized advice: crop recommendations, soil health, market prices, disease detection, and offline mode.
        </p>
        <div className="mt-6 flex gap-4">
          <Link to="/dashboard" className="px-4 py-2 bg-green-700 text-white rounded">Get Started</Link>
          <Link to="/detect" className="px-4 py-2 border rounded">Detect Disease</Link>
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-semibold">Features</h3>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>✔ Crop recommendation</li>
          <li>✔ Weather insights</li>
          <li>✔ Market prices</li>
          <li>✔ AI disease detection</li>
          <li>✔ Multilingual voice/chat</li>
          <li>✔ Offline-ready</li>
        </ul>
      </div>
    </div>
  );
}
