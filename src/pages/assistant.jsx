import { useState } from "react";

export default function Assistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm your Career & Skill Advisor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { role: "user", text: input };
    setMessages([...messages, userMsg]);

    // Simulated AI response (mock)
    const mockReplies = [
      "Based on your skills, Data Science could be a great path.",
      "You should focus on improving your problem-solving and coding skills.",
      "I recommend practicing mock interviews regularly.",
      "Upskilling in Cloud and DevOps can increase your career opportunities."
    ];
    const randomReply = mockReplies[Math.floor(Math.random() * mockReplies.length)];

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: randomReply }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Career Assistant (Demo)</h1>
      <div className="border rounded-lg p-4 h-80 overflow-y-auto bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.role === "user" ? "text-right text-blue-600" : "text-left text-green-700"
            }`}
          >
            <span className="px-3 py-2 rounded-lg inline-block bg-white shadow">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
