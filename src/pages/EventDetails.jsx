import { useParams } from "react-router-dom";

const eventData = {
  1: { title: "Hackathon", date: "2025-02-20", details: "A 24-hour coding competition." },
  2: { title: "Painting Workshop", date: "2025-02-25", details: "A hands-on workshop for art lovers." },
};

function EventDetails() {
  const { id } = useParams();
  const event = eventData[id];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{event?.title}</h1>
      <p className="text-gray-700">Date: {event?.date}</p>
      <p className="text-gray-700">{event?.details}</p>
    </div>
  );
}

export default EventDetails;