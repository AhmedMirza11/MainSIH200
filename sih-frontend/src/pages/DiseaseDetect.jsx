import React, { useState } from "react";

export default function DiseaseDetect() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  function detect(e) {
    e.preventDefault();
    if (!file) return;
    setTimeout(() => setResult("Detected: Blight (demo) — Apply fungicide."), 1000);
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">AI Disease Detection</h2>
      <form onSubmit={detect} className="bg-white p-6 rounded shadow space-y-4">
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
        <button className="px-4 py-2 bg-green-700 text-white rounded">Detect</button>
      </form>
      {result && <div className="mt-4 p-4 bg-yellow-50 rounded">{result}</div>}
    </div>
  );
}
