import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Career Advisor</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/assessment" className="hover:text-indigo-600">Assessment</Link>
        <Link to="/career-path" className="hover:text-indigo-600">Career Path</Link>
        <Link to="/resume-builder" className="hover:text-indigo-600">Resume Builder</Link>
        <Link to="/interview" className="hover:text-indigo-600">Interview Prep</Link>
        <Link to="/assistant" className="hover:text-indigo-600">AI Assistant</Link>
      </div>
    </nav>
  );
}
