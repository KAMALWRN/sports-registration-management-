import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sportsData } from '../data/sportsData';
import TeamList from '../components/TeamList';
import PaymentForm from '../components/PaymentForm';

const SportPage = () => {
  const { sportName } = useParams();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const sport = sportsData[sportName];

  if (!sport) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Sport Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    setShowPayment(true);
  };

  const handlePaymentSuccess = (bookingDetails) => {
    setShowPayment(false);
    // Navigate to success page or show success message
    alert(`Booking Confirmed! Booking ID: ${bookingDetails.bookingId}`);
    navigate('/');
  };

  if (showPayment && selectedSlot) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <button 
            onClick={() => setShowPayment(false)}
            className="mb-6 btn-secondary"
          >
            ← Back to {sport.name}
          </button>
          <PaymentForm 
            slot={selectedSlot}
            sport={sport}
            onPaymentSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              ← Back to Home
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {sport.icon} {sport.name}
              </h1>
              <p className="text-gray-600">{sport.description}</p>
            </div>
            <div></div> {/* Empty div for spacing */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Matches */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📅</span>
              Upcoming Matches
            </h3>
            
            <div className="space-y-4">
              {sport.upcomingMatches.map((match) => (
                <div key={match.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{match.teams}</h4>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {match.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Date:</strong> {match.date}</p>
                    <p><strong>Time:</strong> {match.time}</p>
                    <p><strong>Venue:</strong> {match.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Slots */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎯</span>
              Available Slots
            </h3>
            
            <div className="space-y-4">
              {sport.availableSlots.map((slot) => (
                <div key={slot.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Slot {slot.id}</h4>
                      <p className="text-sm text-gray-600">{slot.date} at {slot.time}</p>
                    </div>
                    <span className="text-lg font-bold text-green-600">{slot.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Duration: {slot.duration}</span>
                    <button 
                      onClick={() => handleSlotSelection(slot)}
                      className="btn-primary text-sm py-1 px-4"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-8">
          <TeamList teamMembers={sport.teamMembers} />
        </div>
      </main>
    </div>
  );
};

export default SportPage;


