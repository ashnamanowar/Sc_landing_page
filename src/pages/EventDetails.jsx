import { useParams } from "react-router-dom";

const eventData = {
  1: { title: "Hackathon", date: "2025-02-20", details: "A 24-hour coding competition." },
  2: { title: "Painting Workshop", date: "2025-02-25", details: "A hands-on workshop for art lovers." },
};

function EventDetails() {
  const { id } = useParams();
  const event = eventData[id];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{event?.title}</h1>
      <p>Date: {event?.date}</p>
      <p>{event?.details}</p>
    </div>
  );
}

export default EventDetails;
