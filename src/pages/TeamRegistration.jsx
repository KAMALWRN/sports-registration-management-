import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const TeamRegistration = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    teamName: '',
    sport: '',
    captainName: '',
    captainEmail: '',
    captainPhone: '',
    members: [{ name: '', email: '', phone: '' }]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Pre-fill sport if provided in URL
    const sportFromUrl = searchParams.get('sport');
    if (sportFromUrl) {
      setFormData(prev => ({
        ...prev,
        sport: sportFromUrl
      }));
    }
  }, [searchParams]);

  const sports = [
    'Football', 'Basketball', 'Cricket', 'Volleyball', 'Tennis', 
    'Badminton', 'Table Tennis', 'Athletics', 'Swimming', 'Chess'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index][field] = value;
    setFormData(prev => ({
      ...prev,
      members: newMembers
    }));
  };

  const addMember = () => {
    setFormData(prev => ({
      ...prev,
      members: [...prev.members, { name: '', email: '', phone: '' }]
    }));
  };

  const removeMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        members: newMembers
      }));
    }
  };

  const checkTeamLimit = (sport) => {
    const existingRegistrations = JSON.parse(localStorage.getItem('teamRegistrations') || '[]');
    const sportRegistrations = existingRegistrations.filter(team => team.sport === sport);
    return sportRegistrations.length >= 30; // 30 team limit
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if sport has reached team limit
      if (checkTeamLimit(formData.sport)) {
        alert(`Registration for ${formData.sport} is full! Maximum 30 teams allowed.`);
        setIsSubmitting(false);
        return;
      }

      // Store registration data temporarily for payment step
      const registrationData = {
        id: Date.now(),
        ...formData,
        registrationDate: new Date().toISOString(),
        status: 'Pending',
        paymentStatus: 'Pending',
        amount: 1000 // Registration fee
      };

      // Store in sessionStorage for payment step
      sessionStorage.setItem('pendingRegistration', JSON.stringify(registrationData));
      
      // Redirect to payment page
      navigate('/payment');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
            <p className="text-gray-600 mb-4">Your team has been registered for the tournament.</p>
            <p className="text-sm text-gray-500">You will be redirected to the homepage shortly...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Team Registration</h1>
          <p className="text-gray-600 mt-2">Register your team for Sathyabama Sports Championship</p>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800 text-sm">
              <span className="font-semibold">⚠️ Team Limit:</span> Maximum 30 teams per sport. 
              {formData.sport && (
                <span className="block mt-1">
                  {checkTeamLimit(formData.sport) 
                    ? `❌ ${formData.sport} is full!` 
                    : `✅ ${formData.sport} has ${30 - (JSON.parse(localStorage.getItem('teamRegistrations') || '[]').filter(team => team.sport === formData.sport).length)} spots remaining.`
                  }
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Name *
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter team name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sport *
                </label>
                <select
                  name="sport"
                  value={formData.sport}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Sport</option>
                  {sports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Captain Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Captain</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Captain Name *
                  </label>
                  <input
                    type="text"
                    name="captainName"
                    value={formData.captainName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Captain's full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="captainEmail"
                    value={formData.captainEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="captain@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="captainPhone"
                    value={formData.captainPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                <button
                  type="button"
                  onClick={addMember}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Member
                </button>
              </div>

              {formData.members.map((member, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Member name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="member@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={member.phone}
                      onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="flex items-end">
                    {formData.members.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMember(index)}
                        className="w-full bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="border-t pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Registering Team...' : 'Register Team'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamRegistration;
