// src/pages/Assistant.jsx
import { useState } from "react";

export default function Assistant() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setChat([...chat, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/genai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setChat((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setChat((prev) => [...prev, { role: "assistant", content: "Error fetching response." }]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">GenAI Career Assistant</h2>
      <div className="space-y-2 mb-4 max-h-80 overflow-y-auto border p-4 rounded-lg bg-gray-50">
        {chat.map((msg, i) => (
          <p
            key={i}
            className={
              msg.role === "user"
                ? "text-right text-blue-700 font-medium"
                : "text-left text-gray-800 font-medium"
            }
          >
            <span className="font-bold">{msg.role === "user" ? "You" : "AI"}:</span> {msg.content}
          </p>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-lg"
          placeholder="Ask me anything about your career..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
