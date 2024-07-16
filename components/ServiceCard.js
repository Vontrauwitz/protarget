// components/ServiceCard.js
export default function ServiceCard({ title, description }) {
    return (
      <div className="bg-white shadow-md rounded p-6 text-center border border-pantone-green">
        <h3 className="text-xl font-aeonik-bold text-pantone-purple">{title}</h3>
        <p className="mt-4 text-gray-600 font-aeonik-regular">{description}</p>
      </div>
    );
  }
  