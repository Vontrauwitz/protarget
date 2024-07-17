// components/CaseStudyCard.js
export default function CaseStudyCard({ title, description }) {
    return (
      <div className="bg-white shadow-md rounded p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    );
  }
  