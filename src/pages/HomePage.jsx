import SportCard from '../components/SportCard';
import Navigation from '../components/Navigation';
import { sportsData } from '../data/sportsData';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navigation />
      {/* HERO BANNER - EXACTLY LIKE THE IMAGE */}
      <section
        className="relative w-full min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/sathyabama-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* University Crest - Left Side */}
        <div className="absolute left-8 top-8 z-20">
          <img
            src="/badges/crest-left.png"
            alt="University Crest"
            className="w-40 h-40 rounded-full drop-shadow-2xl object-cover"
          />
        </div>

        {/* NAAC A++ Badge - Right Side */}
        <div className="absolute right-8 top-8 z-20">
          <img
            src="/badges/naac-a-plus-plus.png"
            alt="NAAC A++"
            className="w-40 h-40 rounded-full drop-shadow-2xl object-cover"
          />
        </div>

        {/* Main Text Content - Center */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-8">
          {/* Large SATHYABAMA Text */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-widest mb-8">
            SATHYABAMA
          </h1>
          
          {/* Subtitle Text */}
          <div className="space-y-2 mb-12">
            <p className="text-2xl md:text-3xl font-bold">
              INSTITUTE OF SCIENCE AND TECHNOLOGY
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              (DEEMED TO BE UNIVERSITY)
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              CATEGORY-1 UNIVERSITY BY UGC
            </p>
          </div>

          {/* Badges Strip - Bottom */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <img src="/badges/abet.png" alt="ABET" className="h-12 md:h-16 object-contain" />
              <img src="/badges/nba.png" alt="NBA" className="h-12 md:h-16 object-contain" />
              <img src="/badges/nirf.png" alt="NIRF" className="h-12 md:h-16 object-contain" />
              <img src="/badges/aicte.png" alt="AICTE" className="h-12 md:h-16 object-contain" />
              <img src="/badges/qs-stars.png" alt="QS Stars" className="h-12 md:h-16 object-contain" />
              <img src="/badges/sdg.png" alt="SDG" className="h-12 md:h-16 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sathyabama Sports Championship</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the biggest college sports tournament! Register your team and compete for glory.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/register" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Register Team
            </a>
            <a 
              href="/events" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Events
            </a>
          </div>
        </div>

        {/* Tournament Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
    <img src="/badges/championship.png" alt="Championship" className="w-full h-40 object cover rounded-md mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Championship</h3>
    <p className="text-gray-600">Compete for the ultimate championship title</p>
  </div>
  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
    <img src="/badges/team-events.png" alt="Team Events" className="w-full h-40 object cover rounded-md mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Team Events</h3>
    <p className="text-gray-600">Register your team for various sports</p>
  </div>
  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
    <img src="/badges/multiple-sports.png" alt="Multiple Sports" className="w-full h-40 object cover rounded-md mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">Multiple Sports</h3>
    <p className="text-gray-600">Football, Basketball, Cricket, and more</p>
  </div>
</div>


        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            What Makes Us Stand Out
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src="/badges/registration-icon.png" alt="Team Registration" className="w-full h-40 object cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Seamless Team Registration</h4>
              <p className="text-gray-600">
                Book your preferred time slots with just a few clicks
              </p>
            </div>
            <div className="text-center">
              <img src="/badges/payment-icon.png" alt="Secure Payments" className="w-full h-40 object cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure Payments</h4>
              <p className="text-gray-600">
                Safe and secure payment processing for all bookings
              </p>
            </div>
            <div className="text-center">
              <img src="/badges/live-updates-icon.png" alt="Live Updates" className="w-full h-40 object cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Live Updates</h4>
              <p className="text-gray-600">
                Real-time match updates and event notifications
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#101c35] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo / Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/badges/crest-left.png"
                  alt="Sathyabama Crest"
                  className="w-10 h-10 rounded-full object-cover shadow"
                />
                <div>
                  <div className="font-extrabold tracking-wide">SATHYABAMA</div>
                  <div className="text-xs text-blue-200">INSTITUTE OF SCIENCE AND TECHNOLOGY</div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4">INFORMATION</h4>
              <ul className="space-y-3 text-blue-200">
                <li><a href="/guidelines" className="hover:text-white">Guidelines</a></li>
                <li><a href="/schedule" className="hover:text-white">Event Schedule</a></li>
                <li><a href="/venue" className="hover:text-white">Venues</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
              <ul className="space-y-3 text-blue-200">
                <li><a href="/" className="hover:text-white">Sathyabama Sports Championship</a></li>
                <li><a href="#" className="hover:text-white">Chief Patrons</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-lg font-semibold mb-4">SOCIALS</h4>
              <ul className="grid grid-cols-2 gap-3 text-blue-200">
                <li><a href="#" className="hover:text-white">Website</a></li>
                <li><a href="#" className="hover:text-white">X (Twitter)</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <h3 className="text-2xl font-bold">Have A Question?</h3>
            <a href="#contact" className="block text-xl text-blue-300 mt-2 mb-4">Get In Touch!</a>
            <p className="text-blue-200 max-w-3xl">
              Thank you for visiting our website! If you have any questions or queries, drop us a message, and we'll get back to you promptly. Your time is valuable to us!
            </p>
            <a href="mailto:helpdesk@sportschampionshipsathyabama.in" className="text-blue-300 underline mt-4 inline-block">helpdesk@sathyabamasportschampionship.in</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


