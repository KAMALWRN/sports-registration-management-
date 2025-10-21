import Navigation from '../components/Navigation';

const Guidelines = () => {
  const guidelines = [
    {
      category: 'General Rules',
      items: [
        'All participants must be current students or faculty members',
        'Valid ID card is required for participation',
        'Registration must be completed before the deadline',
        'Participants must follow the code of conduct at all times'
      ]
    },
    {
      category: 'Team Registration',
      items: [
        'Minimum team size varies by sport (check individual sport requirements)',
        'Team captain must register the entire team',
        'Team changes are allowed only before the registration deadline',
        'All team members must be from the same institution'
      ]
    },
    {
      category: 'Payment & Fees',
      items: [
        'Registration fees must be paid before the deadline',
        'Payment can be made online through the portal',
        'Refunds are available only if the event is cancelled',
        'Late payment charges may apply after the deadline'
      ]
    },
    {
      category: 'Equipment & Safety',
      items: [
        'Participants must bring their own equipment (where specified)',
        'Safety gear is mandatory for contact sports',
        'Medical clearance may be required for certain sports',
        'Injuries must be reported immediately to the organizers'
      ]
    },
    {
      category: 'Competition Rules',
      items: [
        'Matches will be conducted as per official sport rules',
        'Fair play and sportsmanship are expected at all times',
        'Disputes will be resolved by the organizing committee',
        'Results are final and binding'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Event Guidelines</h1>
          <p className="text-gray-600 mt-2">Important rules and regulations for all participants</p>
        </div>

        <div className="space-y-8">
          {guidelines.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notes</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• All participants are responsible for their own safety and well-being</li>
            <li>• The organizing committee reserves the right to modify rules if necessary</li>
            <li>• For any queries, contact the sports coordinator at sports@sportsuniversity.edu</li>
            <li>• Updates and announcements will be posted on the official website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;


