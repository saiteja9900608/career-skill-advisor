import { useState } from "react";

export default function Assistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async (e) => {
    e.preventDefault();
    // Placeholder for GenAI API call
    setResponse("This is a prototype response from the AI Assistant.");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">AI Career Assistant</h2>
      <form onSubmit={handleAsk} className="space-y-4">
        <input
          type="text"
          placeholder="Ask me anything about your career..."
          className="w-full border p-2 rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Ask</button>
      </form>
      {response && <p className="mt-4 text-blue-600">{response}</p>}
    </div>
  );
}
