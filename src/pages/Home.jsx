import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import ClubCard from "../components/ClubCard";
import EventCard from "../components/EventCard";
import EventCalendar from "../components/Calendar";

const clubs = [
  { id: 1, name: "RoboManipal", logo: "/logo.png" },
  { id: 2, name: "ISTE", logo: "/logo_2.png" },
  { id: 3, name: "ACM", logo: "/logo_3.png" },
  { id: 4, name: "ADA Dramatics", logo: "/logo_4.jpg" },
  { id: 5, name: "Kalakriya", logo: "/logo_5.jpg" },
  { id: 6, name: "Goonj", logo: "/logo_6.jpg" },
  { id: 7, name: "Astronomy Club", logo: "/logo_8.jpg" },
  { id: 8, name: "IECSE", logo: "/logo_7.webp" },
];

const events = [
  { id: 1, title: "Hackathon", date: "2025-02-20", description: "A 24-hour coding competition." },
  { id: 2, title: "Painting Workshop", date: "2025-02-25", description: "Learn acrylic painting techniques." },
  { id: 3, title: "Music Fest", date: "2025-03-10", description: "Enjoy live performances by bands." },
  { id: 4, title: "Science Fair", date: "2025-03-15", description: "Innovative projects by students." },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div style={{ display: "flex", gap: "20px", marginTop: "60px" }}>
        
        {/* Calendar Section */}
        <div style={{ flex: "1", minWidth: "400px", padding: "10px" }}>
          <h2>Event Calendar</h2>
          <EventCalendar events={events} />
        </div>

        {/* Clubs Section (Scrollable List) */}
        <div style={{ flex: "1", minWidth: "300px", padding: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2>Clubs</h2>
          </div>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "500px", // Adjust height as needed
              borderLeft: "2px solid #ddd",
              paddingLeft: "10px"
            }}
          >
            {clubs.map((club) => (
              <ClubCard key={club.id} club={club} onClick={() => navigate(`/club/${club.id}`)} />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div style={{ marginTop: "20px" }}>
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => navigate(`/event/${event.id}`)} />
        ))}
      </div>
    </div>
  );
}

export default Home;
