import React, { useEffect, useState } from "react";
import WeatherCard from "../shared/WeatherCard";
import CropCard from "../shared/CropCard";
import { getLocalWeather } from "../services/weatherService";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getLocalWeather().then(setWeather);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-3">Quick Advisory</h3>
          <CropCard />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-3">Weather</h3>
          <WeatherCard data={weather} />
        </div>
      </div>
    </div>
  );
}
