import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h1>
          <p className="text-gray-600 mb-6">
            Your team has been successfully registered for the tournament. You will receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Return to Home
            </button>
            <button 
              onClick={() => navigate('/events')}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              View Other Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;


