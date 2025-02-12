function ClubCard({ club, onClick }) {
  return (
    <div 
      onClick={onClick} 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #ccc", 
        padding: "10px", 
        cursor: "pointer", 
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
    >
      {/* Club Logo */}
      <img 
        src={club.logo} 
        alt={`${club.name} Logo`} 
        style={{ width: "40px", height: "40px", marginRight: "10px", borderRadius: "50%" }} 
      />

      {/* Club Name */}
      <h3 style={{ margin: 0 }}>{club.name}</h3>
    </div>
  );
}

export default ClubCard;
