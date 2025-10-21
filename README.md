# Sports Event Management System

A complete responsive website built with React and Vite for managing sports event fixtures, slot booking, and event timings.

## Features

- 🏆 **Multiple Sports Support**: Cricket, Tennis, Badminton, Football, Basketball, Kabaddi
- 📅 **Event Scheduling**: View upcoming matches and their timings
- 🎯 **Slot Booking**: Book available time slots for different sports
- 👥 **Team Management**: View team members and their roles
- 💳 **Payment Integration**: Dummy payment gateway simulation
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Built with Tailwind CSS for a clean, modern look

## Project Structure

```
src/
├── components/
│   ├── SportCard.jsx      # Individual sport cards on home page
│   ├── TeamList.jsx       # Team members display component
│   └── PaymentForm.jsx    # Payment form component
├── pages/
│   ├── HomePage.jsx       # Main landing page
│   ├── SportPage.jsx      # Individual sport details page
│   └── PaymentPage.jsx    # Payment success page
├── data/
│   └── sportsData.js      # Sample data for all sports
├── App.jsx                # Main app component with routing
├── main.jsx              # Entry point
└── index.css             # Global styles with Tailwind
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system (version 14 or higher).

### Installation

1. Navigate to the project directory:
   ```bash
   cd sports-event-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## How to Use

1. **Home Page**: Browse different sports available on the platform
2. **Sport Selection**: Click on any sport card to view details
3. **Sport Page**: 
   - View upcoming matches
   - Check available slots
   - See team members
   - Book a slot
4. **Payment**: Complete the dummy payment process
5. **Confirmation**: Receive booking confirmation with details

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

## Sample Data

The application includes comprehensive sample data for all sports including:
- Upcoming match schedules
- Available booking slots
- Team member information
- Pricing information

## Features Overview

### Home Page
- Clean, modern design with sport cards
- Hover effects and animations
- Responsive grid layout
- Feature highlights section

### Sport Pages
- Detailed sport information
- Upcoming matches display
- Available slots with booking functionality
- Team member listings
- Navigation back to home

### Payment System
- Complete payment form with validation
- Dummy payment processing simulation
- Booking confirmation system
- Receipt generation

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface
- Consistent user experience across devices

## Customization

You can easily customize the application by:
- Modifying sports data in `src/data/sportsData.js`
- Updating colors and styling in `tailwind.config.js`
- Adding new sports or features
- Customizing the payment flow

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the UI/UX
- Adding more sports
- Enhancing the payment system

## License

This project is open source and available under the MIT License.


