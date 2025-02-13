function EventCard({ event, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="border border-gray-300 p-3 rounded-lg cursor-pointer mb-3 hover:bg-gray-50 transition-colors"
    >
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">{event.date}</p>
    </div>
  );
}

export default EventCard;