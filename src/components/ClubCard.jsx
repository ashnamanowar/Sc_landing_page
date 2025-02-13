function ClubCard({ club, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="flex items-center border border-gray-300 p-3 rounded-lg cursor-pointer mb-3 bg-gray-50 hover:bg-gray-100 transition-colors"
    >
      <img 
        src={club.logo} 
        alt={`${club.name} Logo`} 
        className="w-10 h-10 mr-3 rounded-full"
      />
      <h3 className="m-0">{club.name}</h3>
    </div>
  );
}

export default ClubCard;