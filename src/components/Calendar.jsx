import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventCalendar({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const eventForDate = events.find(
        (event) => new Date(event.date).toDateString() === date.toDateString()
      );
      if (eventForDate) {
        return <div className="w-3 h-3 bg-[#bc59e1] rounded-full mx-auto mt-1"></div>;
      }
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    const today = new Date();
    if (
      view === "month" &&
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "!bg-[#bc59e1] !text-white rounded-lg";
    }
    return "";
  };

  const handleDateClick = (date) => {
    const eventForDate = events.find(
      (event) => new Date(event.date).toDateString() === date.toDateString()
    );
    setSelectedEvent(eventForDate || null);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="flex justify-center">
        <div className="w-[500px] h-[400px] flex items-center justify-center bg-white shadow-lg rounded-lg">
          <Calendar
            tileContent={getTileContent}
            tileClassName={tileClassName}
            onClickDay={handleDateClick}
            prevLabel="< Previous"
            nextLabel="Next >"
            next2Label={null}
            prev2Label={null}
            className="w-full text-lg p-4"
          />
        </div>
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-2 right-4 text-2xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
            <p>
              <strong>Date:</strong> {new Date(selectedEvent.date).toDateString()}
            </p>
            <p>
              <strong>Time:</strong> {selectedEvent.time || "N/A"}
            </p>
            <p>
              <strong>Description:</strong> {selectedEvent.description || "No description available."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCalendar;
