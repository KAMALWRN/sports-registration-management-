import Navigation from '../components/Navigation';

const Schedule = () => {
  const schedule = [
    {
      date: '2025-11-15',
      day: 'Thursday',
      events: [
        { time: '09:00 AM', sport: 'Football', match: 'Quarter Finals', venue: 'Main Ground' },
        { time: '11:00 AM', sport: 'Basketball', match: 'Semi Finals', venue: 'Indoor Court' },
        { time: '02:00 PM', sport: 'Cricket', match: 'Group Stage', venue: 'Cricket Ground' },
        { time: '04:00 PM', sport: 'Volleyball', match: 'Quarter Finals', venue: 'Volleyball Court' }
      ]
    },
    {
      date: '2025-11-16',
      day: 'Friday',
      events: [
        { time: '09:00 AM', sport: 'Tennis', match: 'Singles Finals', venue: 'Tennis Courts' },
        { time: '10:30 AM', sport: 'Badminton', match: 'Doubles Semi Finals', venue: 'Badminton Hall' },
        { time: '02:00 PM', sport: 'Football', match: 'Semi Finals', venue: 'Main Ground' },
        { time: '04:00 PM', sport: 'Basketball', match: 'Finals', venue: 'Indoor Court' }
      ]
    },
    {
      date: '2025-11-17',
      day: 'Saturday',
      events: [
        { time: '09:00 AM', sport: 'Cricket', match: 'Semi Finals', venue: 'Cricket Ground' },
        { time: '11:00 AM', sport: 'Volleyball', match: 'Semi Finals', venue: 'Volleyball Court' },
        { time: '02:00 PM', sport: 'Badminton', match: 'Doubles Finals', venue: 'Badminton Hall' },
        { time: '04:00 PM', sport: 'Football', match: 'Finals', venue: 'Main Ground' }
      ]
    },
    {
      date: '2025-11-18',
      day: 'Sunday',
      events: [
        { time: '09:00 AM', sport: 'Cricket', match: 'Finals', venue: 'Cricket Ground' },
        { time: '11:00 AM', sport: 'Volleyball', match: 'Finals', venue: 'Volleyball Court' },
        { time: '02:00 PM', sport: 'Awards Ceremony', match: 'Prize Distribution', venue: 'Auditorium' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Event Schedule</h1>
          <p className="text-gray-600 mt-2">Complete schedule of all sports events</p>
        </div>

        <div className="space-y-6">
          {schedule.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{day.day}</h2>
                <p className="text-blue-100">{day.date}</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">{event.time}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{event.sport}</h3>
                          <p className="text-gray-600">{event.match}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">📍 {event.venue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">Schedule Notes</h3>
          <ul className="space-y-2 text-yellow-800">
            <li>• All times are subject to change based on weather conditions</li>
            <li>• Participants should arrive 30 minutes before their scheduled time</li>
            <li>• Live updates will be available on the official website</li>
            <li>• For any schedule changes, participants will be notified via email/SMS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;


