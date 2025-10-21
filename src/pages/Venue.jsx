import Navigation from '../components/Navigation';

const Venue = () => {
  const venues = [
    {
      name: 'Main Football Ground',
      capacity: '5000',
      facilities: ['Floodlights', 'Changing Rooms', 'Seating', 'Parking'],
      sports: ['Football', 'Athletics'],
      image: '⚽',
      description: 'Our premier outdoor facility with professional-grade turf and modern amenities.'
    },
    {
      name: 'Indoor Basketball Court',
      capacity: '2000',
      facilities: ['Air Conditioning', 'Scoreboard', 'Changing Rooms', 'Seating'],
      sports: ['Basketball', 'Volleyball', 'Badminton'],
      image: '🏀',
      description: 'State-of-the-art indoor facility perfect for basketball and other indoor sports.'
    },
    {
      name: 'Cricket Ground',
      capacity: '3000',
      facilities: ['Pitch Maintenance', 'Pavilion', 'Scoreboard', 'Parking'],
      sports: ['Cricket'],
      image: '🏏',
      description: 'Professional cricket ground with well-maintained pitch and spectator facilities.'
    },
    {
      name: 'Tennis Courts',
      capacity: '500',
      facilities: ['Multiple Courts', 'Lighting', 'Seating', 'Equipment Rental'],
      sports: ['Tennis', 'Table Tennis'],
      image: '🎾',
      description: 'Multiple tennis courts with professional lighting for evening matches.'
    },
    {
      name: 'Swimming Pool Complex',
      capacity: '1000',
      facilities: ['Olympic Size Pool', 'Changing Rooms', 'Lifeguard', 'Seating'],
      sports: ['Swimming', 'Water Polo'],
      image: '🏊',
      description: 'Olympic-standard swimming facility with modern amenities and safety features.'
    },
    {
      name: 'Athletics Track',
      capacity: '4000',
      facilities: ['400m Track', 'Field Events', 'Seating', 'Equipment'],
      sports: ['Track & Field', 'Marathon'],
      image: '🏃',
      description: 'Professional athletics track with facilities for all track and field events.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Venue Information</h1>
          <p className="text-gray-600 mt-2">Explore our world-class sports facilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">{venue.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{venue.name}</h3>
                  <p className="text-gray-600 text-sm">Capacity: {venue.capacity} spectators</p>
                </div>

                <p className="text-gray-700 text-sm mb-4">{venue.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Facilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {venue.facilities.map((facility, facilityIndex) => (
                      <span key={facilityIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sports:</h4>
                  <div className="flex flex-wrap gap-2">
                    {venue.sports.map((sport, sportIndex) => (
                      <span key={sportIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {sport}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Venue Map & Directions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p>Sathyabama University<br />
              Jeppiaar Nagar, Rajiv Gandhi Salai<br />
              Chennai, Tamil Nadu-600119 </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Notes</h3>
          <ul className="space-y-2 text-yellow-800">
            <li>• All venues are equipped with first aid facilities</li>
            <li>• Parking is available on a first-come, first-served basis</li>
            <li>• Food and beverages are available at venue cafeterias</li>
            <li>• Photography and videography are allowed in designated areas only</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Venue;


