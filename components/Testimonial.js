// components/Testimonial.js
export default function Testimonial({ name, position, quote }) {
    return (
      <div className="bg-white shadow-md rounded p-6 border border-pantone-green">
        <p className="text-gray-600 italic font-aeonik-light">"{quote}"</p>
        <div className="mt-4 text-pantone-purple font-aeonik-bold">{name}</div>
        <div className="text-gray-600 font-aeonik-regular">{position}</div>
      </div>
    );
  }
  