import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Personal Career & Skill Advisor
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        An AI-powered prototype to guide your career choices, assess your skills,
        and give personalized advice.
      </p>

      <div className="space-x-4">
        <Link
          to="/assessment"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Start Assessment
        </Link>
        <Link
          to="/assistant"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Ask AI Assistant
        </Link>
      </div>
    </div>
  );
}
