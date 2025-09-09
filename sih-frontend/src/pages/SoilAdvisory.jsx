import React, { useState } from "react";

export default function SoilAdvisory() {
  const [ph, setPh] = useState("");
  const [moisture, setMoisture] = useState("");
  const [result, setResult] = useState(null);

  function submit(e) {
    e.preventDefault();
    const rec = parseFloat(ph) < 5.5 ? "Add lime, grow nitrogen-fixing crops." : "Balanced soil, proceed with cereals.";
    setResult(rec);
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Soil & Crop Advisory</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4">
        <input className="w-full border rounded p-2" placeholder="Soil pH" value={ph} onChange={e => setPh(e.target.value)} />
        <input className="w-full border rounded p-2" placeholder="Soil Moisture %" value={moisture} onChange={e => setMoisture(e.target.value)} />
        <button className="px-4 py-2 bg-green-700 text-white rounded">Get Advice</button>
      </form>
      {result && <div className="mt-4 p-4 bg-emerald-50 rounded">{result}</div>}
    </div>
  );
}
