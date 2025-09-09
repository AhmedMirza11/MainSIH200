import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([{ from: "bot", text: "नमस्ते! कैसे मदद करूँ?" }]);
  const [input, setInput] = useState("");

  function send() {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "डेमो जवाब: यह जगह NLP मॉडल का है।" }]);
    setInput("");
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">Chatbot (Demo)</h2>
      <div className="bg-white p-4 rounded shadow space-y-3">
        <div className="h-64 overflow-auto border p-2">
          {messages.map((m, i) => (
            <div key={i} className={m.from === "bot" ? "text-left" : "text-right"}>
              <span className={`inline-block px-3 py-2 rounded ${m.from === "bot" ? "bg-slate-100" : "bg-green-700 text-white"}`}>{m.text}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input className="flex-1 border rounded px-3 py-2" value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={send} className="px-4 py-2 bg-green-700 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
}
