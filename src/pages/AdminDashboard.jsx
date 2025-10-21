import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import apiService from '../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    totalTeams: 0,
    totalRevenue: 0,
    pendingPayments: 0
  });
  const [teams, setTeams] = useState([]);
  const [teamActionLoadingId, setTeamActionLoadingId] = useState(null);
  const [slotExtensionMinutes, setSlotExtensionMinutes] = useState(15);
  const [payments, setPayments] = useState([]);
  const [slotCountAddition, setSlotCountAddition] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('facultyAuth');
    if (!isAuthenticated) {
      navigate('/faculty-login');
      return;
    }

    // Load initial data
    loadDashboardData();
    
    // Set up real-time updates
    const handleStorageChange = () => {
      loadDashboardData();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for changes every 2 seconds for same-tab updates
    const interval = setInterval(loadDashboardData, 2000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [navigate]);

  const loadDashboardData = async () => {
    setIsLoading(true);
    
    try {
      // Try to load data from API, fallback to localStorage data if API is not available
      try {
        const [statsData, teamsData, paymentsData] = await Promise.all([
          apiService.getDashboardStats(),
          apiService.getTeams(),
          apiService.getPayments()
        ]);
        
        setStats(statsData);
        setTeams(teamsData);
        setPayments(paymentsData);
      } catch (apiError) {
        console.warn('API not available, using localStorage data:', apiError);
        
        // Load from localStorage
        const registeredTeams = JSON.parse(localStorage.getItem('teamRegistrations') || '[]');
        
        // Transform registered teams data for display
        const transformedTeams = registeredTeams.map(team => ({
          id: team.id,
          name: team.teamName,
          sport: team.sport,
          members: team.members.length,
          status: team.status,
          captainName: team.captainName,
          captainEmail: team.captainEmail,
          captainPhone: team.captainPhone,
          registrationDate: team.registrationDate
        }));

        setTeams(transformedTeams);
        
        // Calculate stats from registered teams
        const totalTeams = registeredTeams.length;
        const confirmedTeams = registeredTeams.filter(t => t.status === 'Confirmed').length;
        const pendingTeams = registeredTeams.filter(t => t.status === 'Pending').length;
        
        // Calculate team counts per sport
        const sportCounts = {};
        registeredTeams.forEach(team => {
          sportCounts[team.sport] = (sportCounts[team.sport] || 0) + 1;
        });
        
        setStats({
          totalRegistrations: totalTeams,
          totalTeams: totalTeams,
          totalRevenue: confirmedTeams * 1000, // Mock revenue calculation
          pendingPayments: pendingTeams,
          sportCounts: sportCounts
        });

        // Generate mock payments for registered teams
        const mockPayments = registeredTeams.map(team => ({
          id: team.id,
          teamName: team.teamName,
          amount: 1000,
          status: team.paymentStatus,
          date: team.registrationDate.split('T')[0],
          transactionId: `TXN${team.id}`
        }));

        setPayments(mockPayments);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTeam = async (teamId) => {
    setTeamActionLoadingId(teamId);
    try {
      try {
        await apiService.deleteTeam(teamId);
        setTeams((prev) => prev.filter((t) => t.id !== teamId));
        setStats((s) => ({
          ...s,
          totalTeams: Math.max(0, s.totalTeams - 1),
          totalRegistrations: Math.max(0, s.totalRegistrations - 1)
        }));
      } catch (apiError) {
        console.warn('API delete failed, applying local change:', apiError);
        setTeams((prev) => prev.filter((t) => t.id !== teamId));
      }
      
      // Update localStorage and trigger real-time updates
      const existingRegistrations = JSON.parse(localStorage.getItem('teamRegistrations') || '[]');
      const updatedRegistrations = existingRegistrations.filter(team => team.id !== teamId);
      localStorage.setItem('teamRegistrations', JSON.stringify(updatedRegistrations));
      window.dispatchEvent(new Event('storage'));
    } finally {
      setTeamActionLoadingId(null);
    }
  };

  const extendSlot = async (teamId, minutes) => {
    setTeamActionLoadingId(teamId);
    try {
      try {
        await apiService.extendTeamSlot(teamId, minutes);
      } catch (apiError) {
        console.warn('API extend-slot failed, applying local change:', apiError);
      }
      setTeams((prev) => prev.map((t) => (
        t.id === teamId ? { ...t, slotExtension: (t.slotExtension || 0) + minutes } : t
      )));
    } finally {
      setTeamActionLoadingId(null);
    }
  };

  const extendSlotsCount = async (teamId, slots) => {
    setTeamActionLoadingId(teamId);
    try {
      try {
        await apiService.extendTeamSlots(teamId, slots);
      } catch (apiError) {
        console.warn('API extend-slots failed, applying local change:', apiError);
      }
      setTeams((prev) => prev.map((t) => (
        t.id === teamId ? { ...t, slots: (t.slots || 0) + slots } : t
      )));
    } finally {
      setTeamActionLoadingId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('facultyAuth');
    navigate('/faculty-login');
  };

  const downloadReceipt = async (payment) => {
    try {
      // Try to get receipt from API
      const receiptData = await apiService.generateReceipt(payment.id);
      
      // If API returns receipt data, use it
      if (receiptData && receiptData.content) {
        const blob = new Blob([receiptData.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `receipt-${payment.transactionId}.txt`;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        throw new Error('No receipt data from API');
      }
    } catch (error) {
      console.warn('API receipt generation failed, using fallback:', error);
      
      // Fallback to local receipt generation
      const receiptContent = `
SPORTS EVENT MANAGEMENT SYSTEM
================================
Receipt ID: ${payment.transactionId}
Team: ${payment.teamName}
Amount: ₹${payment.amount}
Status: ${payment.status}
Date: ${payment.date}
================================
      `;
      
      const blob = new Blob([receiptContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `receipt-${payment.transactionId}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  //if (isLoading) {
  //  return (
    //  <div className="min-h-screen bg-gray-50">
     //   <Navigation />
      //  <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      //    <div className="text-center">
        //    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
       //     <p className="mt-4 text-gray-600">Loading dashboard...</p>
        //  </div>
      //  </div>
      //</div>
    //);
 // }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Sports Event Management System</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRegistrations}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Teams</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalTeams}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <span className="text-2xl">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingPayments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sport Limits Overview */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sport Registration Limits</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Football', 'Basketball', 'Cricket', 'Volleyball', 'Tennis', 'Badminton'].map(sport => {
              const currentCount = stats.sportCounts?.[sport] || 0;
              const isFull = currentCount >= 30;
              return (
                <div key={sport} className={`p-4 rounded-lg border-2 ${isFull ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{sport}</h4>
                    <p className={`text-sm ${isFull ? 'text-red-600' : 'text-green-600'}`}>
                      {currentCount}/30 teams
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${isFull ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${(currentCount / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Teams List */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Team Registrations</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sport</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Captain</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Members</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teams.map((team) => (
                    <tr key={team.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.sport}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>
                          <div className="font-medium">{team.captainName}</div>
                          <div className="text-xs text-gray-400">{team.captainEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.members}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          team.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {team.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                          <button
                            className="text-red-600 hover:text-red-800 font-semibold disabled:opacity-50"
                            disabled={teamActionLoadingId === team.id}
                            onClick={() => removeTeam(team.id)}
                          >
                            {teamActionLoadingId === team.id ? 'Removing...' : 'Remove'}
                          </button>
                          <button
                            className="text-green-600 hover:text-green-800 font-semibold disabled:opacity-50"
                            disabled={teamActionLoadingId === team.id}
                            onClick={() => {
                              setTeams(prev => prev.map(t => 
                                t.id === team.id 
                                  ? { ...t, status: t.status === 'Confirmed' ? 'Pending' : 'Confirmed' }
                                  : t
                              ));
                            }}
                          >
                            {team.status === 'Confirmed' ? 'Unconfirm' : 'Confirm'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Records */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Payment Records</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.teamName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{payment.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          payment.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => downloadReceipt(payment)}
                          className="text-blue-600 hover:text-blue-900 font-medium"
                        >
                          Download Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
