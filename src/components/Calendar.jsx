import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

function EventCalendar({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle tile content (red dot for event days)
  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const eventForDate = events.find(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      if (eventForDate) {
        return <div className="event-dot"></div>;
      }
    }
    return null;
  };

  // Function to handle date click
  const handleDateClick = (date) => {
    const eventForDate = events.find(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    setSelectedEvent(eventForDate || null);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="calendar-wrapper">
      <Calendar
        tileContent={getTileContent}
        onClickDay={handleDateClick}
        prevLabel="< Previous"
        nextLabel="Next >"
        next2Label={null}
        prev2Label={null}
      />

      {/* Pop-up Box */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {new Date(selectedEvent.date).toDateString()}</p>
            <p><strong>Time:</strong> {selectedEvent.time || "N/A"}</p>
            <p><strong>Description:</strong> {selectedEvent.description || "No description available."}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCalendar;
