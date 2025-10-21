import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Payment = () => {
  const [registrationData, setRegistrationData] = useState(null);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load registration data from sessionStorage
    const pendingRegistration = sessionStorage.getItem('pendingRegistration');
    if (!pendingRegistration) {
      navigate('/register');
      return;
    }
    setRegistrationData(JSON.parse(pendingRegistration));
  }, [navigate]);

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update registration with payment info
      const completedRegistration = {
        ...registrationData,
        paymentStatus: 'Completed',
        paymentDate: new Date().toISOString(),
        transactionId: `TXN${Date.now()}`
      };

      // Store in localStorage
      const existingRegistrations = JSON.parse(localStorage.getItem('teamRegistrations') || '[]');
      existingRegistrations.push(completedRegistration);
      localStorage.setItem('teamRegistrations', JSON.stringify(existingRegistrations));

      // Trigger storage event for real-time updates
      window.dispatchEvent(new Event('storage'));

      // Clear session storage
      sessionStorage.removeItem('pendingRegistration');
      
      // Redirect to success page
      navigate('/payment-success');
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!registrationData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">Payment Confirmation</h1>
          <p className="text-gray-600 mt-2">Complete your team registration payment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Registration Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Team Name:</span>
                <span className="font-medium">{registrationData.teamName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sport:</span>
                <span className="font-medium">{registrationData.sport}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Captain:</span>
                <span className="font-medium">{registrationData.captainName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Team Members:</span>
                <span className="font-medium">{registrationData.members.length}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Registration Fee:</span>
                  <span>₹{registrationData.amount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Details</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number *
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="MM/YY"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV *
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    placeholder="123"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name *
                </label>
                <input
                  type="text"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handlePaymentChange}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email for Receipt *
                </label>
                <input
                  type="email"
                  name="email"
                  value={paymentData.email}
                  onChange={handlePaymentChange}
                  placeholder="john@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">🔒</span>
                  <span className="text-sm text-blue-800">
                    Your payment information is secure and encrypted
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isProcessing ? 'Processing Payment...' : `Pay ₹${registrationData.amount}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
