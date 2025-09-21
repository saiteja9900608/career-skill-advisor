import { useState } from "react";

export default function Assessment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Skill Assessment</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">What is your primary skill?</span>
            <input
              type="text"
              className="mt-1 block w-full border rounded-lg p-2"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">What career field interests you?</span>
            <input
              type="text"
              className="mt-1 block w-full border rounded-lg p-2"
              required
            />
          </label>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="mt-6 bg-green-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Your Suggested Path 🚀</h2>
          <p className="text-gray-700">
            Based on your skills and interests, we suggest exploring{" "}
            <span className="font-bold">Data Science, Cloud Engineering, or AI Development</span>.  
            You can now chat with the AI Assistant for more tailored guidance.
          </p>
        </div>
      )}
    </div>
  );
}
