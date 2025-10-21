import { useState } from 'react';

const PaymentForm = ({ slot, sport, onPaymentSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess({
        slot,
        sport,
        bookingId: `BK${Date.now()}`,
        timestamp: new Date().toISOString()
      });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        💳 Payment Details
      </h3>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Booking Summary</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Sport:</strong> {sport.name} {sport.icon}</p>
          <p><strong>Date:</strong> {slot.date}</p>
          <p><strong>Time:</strong> {slot.time}</p>
          <p><strong>Duration:</strong> {slot.duration}</p>
          <p><strong>Price:</strong> {slot.price}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-3 px-4 rounded-md font-semibold transition-colors duration-200 ${
            isProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            'Pay Now'
          )}
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        🔒 This is a demo payment system. No real money will be charged.
      </p>
    </div>
  );
};

export default PaymentForm;

