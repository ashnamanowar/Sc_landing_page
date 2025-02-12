import { useParams } from "react-router-dom";

const clubData = {
  1: { name: "Coding Club", description: "A club for programmers and tech enthusiasts." },
  2: { name: "Art Club", description: "A place for artists to showcase and improve their skills." },
  

};

function ClubDetails() {
  const { id } = useParams();
  const club = clubData[id];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{club?.name}</h1>
      <p>{club?.description}</p>
    </div>
  );
}

export default ClubDetails;
