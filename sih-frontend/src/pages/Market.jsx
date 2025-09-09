import React, { useEffect, useState } from "react";

export default function Market() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData([{ crop: "Wheat", price: 2200 }, { crop: "Maize", price: 1700 }]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Market Prices</h2>
      <div className="bg-white p-4 rounded shadow">
        {data ? (
          <table className="w-full text-left">
            <thead><tr><th>Crop</th><th>Price (₹/quintal)</th></tr></thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}><td>{d.crop}</td><td>{d.price}</td></tr>
              ))}
            </tbody>
          </table>
        ) : "Loading..."}
      </div>
    </div>
  );
}
