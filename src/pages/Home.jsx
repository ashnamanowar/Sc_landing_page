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
    <div className="p-5">
      <Navbar />

      <div className="flex flex-col md:flex-row gap-5 mt-16">
        <div className="flex-1 min-w-[400px] p-3">
          <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
          <EventCalendar events={events} />
        </div>

        <div className="flex-1 min-w-[300px] p-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Clubs</h2>
          </div>
          <div className="overflow-y-auto max-h-[500px] border-l-2 border-gray-200 pl-3">
            {clubs.map((club) => (
              <ClubCard key={club.id} club={club} onClick={() => navigate(`/club/${club.id}`)} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => navigate(`/event/${event.id}`)} />
        ))}
      </div>
    </div>
  );
}

export default Home;