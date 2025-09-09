import React, { useEffect, useState } from "react";
import WeatherCard from "../shared/WeatherCard";
import { getLocalWeather } from "../services/weatherService";

export default function WeatherPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => { getLocalWeather().then(setWeather); }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Weather Insights</h2>
      <div className="bg-white p-6 rounded shadow">
        <WeatherCard data={weather} />
      </div>
    </div>
  );
}
