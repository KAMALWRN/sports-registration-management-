import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SportPage from './pages/SportPage';
import PaymentPage from './pages/PaymentPage';
import FacultyLogin from './pages/FacultyLogin';
import AdminDashboard from './pages/AdminDashboard';
import Events from './pages/Events';
import Guidelines from './pages/Guidelines';
import Schedule from './pages/Schedule';
import Coordinators from './pages/Coordinators';
import Venue from './pages/Venue';
import TeamRegistration from './pages/TeamRegistration';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sport/:sportName" element={<SportPage />} />
          <Route path="/payment-success" element={<PaymentPage />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/coordinators" element={<Coordinators />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/register" element={<TeamRegistration />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


