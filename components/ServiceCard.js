// components/ServiceCard.js
export default function ServiceCard({ title, description, tech }) {
  return (
    <div className="relative bg-white shadow-md rounded p-6 text-center border border-pantone-green group">
      <h3 className="text-xl font-aeonik-bold text-pantone-purple">{title}</h3>
      <p className="mt-4 text-gray-600 font-aeonik-regular">{description}</p>
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <p className="text-pantone-green font-aeonik-bold text-lg">{tech}</p>
      </div>
    </div>
  );
}
