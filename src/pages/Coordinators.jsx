import Navigation from '../components/Navigation';

const Coordinators = () => {
  const coordinators = [
    {
      name: 'name',
      position: 'Sports Director',
      email: 'mail id',
      phone: '1234567890',
      sports: ['Overall Coordination', 'Football', 'Basketball'],
      image: '👩‍💼'
    },
    {
      name: 'name',
      position: 'Cricket Coordinator',
      email: 'mail id',
      phone: '1234567890',
      sports: ['Cricket', 'Tennis'],
      image: '👨‍🏫'
    },
    {
      name: 'name',
      position: 'Indoor Sports Coordinator',
      email: 'mail id',
      phone: '1234567890',
      sports: ['Volleyball', 'Badminton', 'Table Tennis'],
      image: '👩‍🎓'
    },
    {
      name: 'name',
      position: 'Athletics Coordinator',
      email: 'mail id',
      phone: '1234567890',
      sports: ['Track & Field', 'Swimming'],
      image: '👨‍⚕️'
    },
    {
      name: 'name',
      position: 'Registration Coordinator',
      email: 'mail id',
      phone: '1234567890',
      sports: ['Registration', 'Payment Processing'],
      image: '👩‍💻'
    },
    {
      name: 'name',
      position: 'Technical Coordinator',
      email: 'mail id',
      phone: '1234567890',
      sports: ['Equipment', 'Venue Management'],
      image: '👨‍🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Event Coordinators</h1>
          <p className="text-gray-600 mt-2">Meet our dedicated team of sports coordinators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coordinators.map((coordinator, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{coordinator.image}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{coordinator.name}</h3>
                  <p className="text-blue-600 font-semibold">{coordinator.position}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-3">📧</span>
                    <a href={`mailto:${coordinator.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {coordinator.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-3">📞</span>
                    <a href={`tel:${coordinator.phone}`} className="text-blue-600 hover:text-blue-800 text-sm">
                      {coordinator.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Responsible for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {coordinator.sports.map((sport, sportIndex) => (
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

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">General Inquiries</h4>
              <p>Email: sathyabamauniversity.edu</p>
              <p>Phone: 1234567890</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Emergency Contact</h4>
              <p>Phone: 1234567890</p>
              <p>Available 24/7 during events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinators;


