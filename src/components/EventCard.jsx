function EventCard({ event, onClick }) {
    return (
      <div onClick={onClick} style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer", marginBottom: "10px" }}>
        <h3>{event.title}</h3>
        <p>{event.date}</p>
      </div>
    );
  }
  
  export default EventCard;
  