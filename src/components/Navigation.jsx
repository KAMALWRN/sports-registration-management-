import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg relative">
      {/* Subtle diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/* Crest Logo Container */}
            <div className="flex items-center space-x-4">
              {/* Crest Logo Circle */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center">
                    <span className="text-yellow-500 text-lg font-bold">🏆</span>
                  </div>
                </div>
              </div>
              
              {/* Main Title */}
              <div className="text-white">
                <div className="text-xl font-black">
                  
                  <span className="text-blue-200 ml-2">SATHYABAMA SPORTS</span>
                </div>
                <div className="text-xl font-black">
                  
                  <span className="text-blue-200 ml-2">CHAMPIONSHIP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="/events" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Events
            </Link>
            <Link to="/guidelines" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Guidelines
            </Link>
            <Link to="/schedule" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Schedule
            </Link>
            <Link to="/coordinators" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Coordinators
            </Link>
            <Link to="/venue" className="text-white hover:text-blue-200 transition-colors duration-200 font-medium">
              Venue
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Faculty Login Button */}
            <Link 
              to="/faculty-login" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
