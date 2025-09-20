import { useState } from "react";

export default function Assessment() {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(`Based on your input (${skills}), we recommend exploring Cloud Engineering and AI Engineering.`);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Skill Assessment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Enter your current skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {result && <p className="mt-4 text-green-600">{result}</p>}
    </div>
  );
}
