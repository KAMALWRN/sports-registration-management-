import { useNavigate } from 'react-router-dom';

const SportCard = ({ sport, sportKey }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sport/${sportKey}`);
  };

  return (
    <div 
      className="sport-card bg-white rounded-xl shadow-lg p-6 cursor-pointer border-2 border-transparent hover:border-gray-200"
      onClick={handleClick}
    >
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce-slow">
          {sport.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {sport.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {sport.description}
        </p>
        <div className="flex justify-center space-x-2 text-sm text-gray-500">
          <span>📅 {sport.upcomingMatches.length} Upcoming Matches</span>
          <span>•</span>
          <span>🎯 {sport.availableSlots.length} Available Slots</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-center">
          <span className={`inline-block w-3 h-3 rounded-full bg-${sport.color} mr-2`}></span>
          <span className="text-sm text-gray-600">Click to view details</span>
        </div>
      </div>
    </div>
  );
};

export default SportCard;


