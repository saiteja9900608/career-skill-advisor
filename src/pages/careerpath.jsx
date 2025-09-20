export default function CareerPath() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Career Path Recommendation</h2>
      <p className="text-gray-600">
        Based on your skills, here’s a possible roadmap:  
        <ul className="list-disc ml-6 mt-2">
          <li>Learn Cloud Platforms (AWS, Azure, GCP)</li>
          <li>Gain DevOps skills (Docker, Kubernetes, CI/CD)</li>
          <li>Explore AI/ML basics</li>
        </ul>
      </p>
    </div>
  );
}
