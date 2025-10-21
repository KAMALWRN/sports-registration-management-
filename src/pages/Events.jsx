import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const Events = () => {
  const [teamCounts, setTeamCounts] = useState({});
  
  // Load real team counts from localStorage
  useEffect(() => {
    const loadTeamCounts = () => {
      const registeredTeams = JSON.parse(localStorage.getItem('teamRegistrations') || '[]');
      const counts = {};
      registeredTeams.forEach(team => {
        counts[team.sport] = (counts[team.sport] || 0) + 1;
      });
      setTeamCounts(counts);
    };

    loadTeamCounts();
    
    // Listen for storage changes (when new teams register)
    const handleStorageChange = () => {
      loadTeamCounts();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes every 2 seconds for same-tab updates
    const interval = setInterval(loadTeamCounts, 2000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const events = [
    {
      id: 1,
      name: 'Football Championship',
      date: '2024-02-15',
      time: '09:00 AM',
      venue: 'Main Football Ground',
      participants: 16,
      maxTeams: 30,
      status: 'Open for Registration'
    },
    {
      id: 2,
      name: 'Basketball Tournament',
      date: '2024-02-16',
      time: '10:00 AM',
      venue: 'Indoor Basketball Court',
      participants: 12,
      maxTeams: 30,
      status: 'Open for Registration'
    },
    {
      id: 3,
      name: 'Cricket League',
      date: '2024-02-17',
      time: '08:00 AM',
      venue: 'Cricket Ground',
      participants: 8,
      maxTeams: 30,
      status: 'Open for Registration'
    },
    {
      id: 4,
      name: 'Volleyball Championship',
      date: '2024-02-18',
      time: '11:00 AM',
      venue: 'Volleyball Court',
      participants: 10,
      maxTeams: 30,
      status: 'Open for Registration'
    },
    {
      id: 5,
      name: 'Tennis Singles',
      date: '2024-02-19',
      time: '09:30 AM',
      venue: 'Tennis Courts',
      participants: 20,
      maxTeams: 30,
      status: 'Open for Registration'
    },
    {
      id: 6,
      name: 'Badminton Doubles',
      date: '2024-02-20',
      time: '10:30 AM',
      venue: 'Badminton Hall',
      participants: 16,
      maxTeams: 30,
      status: 'Open for Registration'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sports Events</h1>
          <p className="text-gray-600 mt-2">Join our exciting sports competitions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    event.status === 'Open for Registration' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">📍</span>
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">👥</span>
                    <span>{teamCounts[event.name.split(' ')[0]] || 0}/{event.maxTeams} teams registered</span>
                  </div>
                </div>

                <div className="mt-6">
                  {(teamCounts[event.name.split(' ')[0]] || 0) >= event.maxTeams ? (
                    <button className="w-full bg-red-300 text-red-700 py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
                      Registration Full
                    </button>
                  ) : event.status === 'Open for Registration' ? (
                    <a 
                      href={`/register?sport=${encodeURIComponent(event.name.split(' ')[0])}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 inline-block text-center"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
                      Registration Closed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
