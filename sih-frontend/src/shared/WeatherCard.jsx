import React from "react";

export default function WeatherCard({ data }) {
  if (!data) return <p className="text-slate-500">No data</p>;
  return (
    <div>
      <p className="text-lg font-semibold">{data.location}</p>
      <p className="text-3xl">{data.temp}°C</p>
      <p className="text-slate-600">{data.desc}</p>
    </div>
  );
}
