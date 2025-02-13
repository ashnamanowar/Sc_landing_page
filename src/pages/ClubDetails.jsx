import { useParams } from "react-router-dom";

const clubData = {
  1: { name: "Coding Club", description: "A club for programmers and tech enthusiasts." },
  2: { name: "Art Club", description: "A place for artists to showcase and improve their skills." },
};

function ClubDetails() {
  const { id } = useParams();
  const club = clubData[id];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{club?.name}</h1>
      <p className="text-gray-700">{club?.description}</p>
    </div>
  );
}

export default ClubDetails;