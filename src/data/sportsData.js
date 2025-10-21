export const sportsData = {
  cricket: {
    name: 'Cricket',
    color: 'sports-cricket',
    icon: '🏏',
    description: 'The Gentleman\'s Game',
    upcomingMatches: [
      {
        id: 1,
        teams: 'Team A vs Team B',
        date: '2024-01-20',
        time: '10:00 AM',
        venue: 'Main Cricket Ground',
        status: 'upcoming'
      },
      {
        id: 2,
        teams: 'Team C vs Team D',
        date: '2024-01-22',
        time: '2:00 PM',
        venue: 'Main Cricket Ground',
        status: 'upcoming'
      }
    ],
    availableSlots: [
      { id: 1, date: '2024-01-25', time: '9:00 AM', duration: '3 hours', price: '$50' },
      { id: 2, date: '2024-01-26', time: '2:00 PM', duration: '3 hours', price: '$50' },
      { id: 3, date: '2024-01-27', time: '10:00 AM', duration: '3 hours', price: '$50' }
    ],
    teamMembers: [
      { id: 1, name: 'John Smith', role: 'Captain', team: 'Team A' },
      { id: 2, name: 'Mike Johnson', role: 'Vice Captain', team: 'Team A' },
      { id: 3, name: 'David Brown', role: 'Captain', team: 'Team B' },
      { id: 4, name: 'Chris Wilson', role: 'Vice Captain', team: 'Team B' }
    ]
  },
  tennis: {
    name: 'Tennis',
    color: 'sports-tennis',
    icon: '🎾',
    description: 'The Sport of Kings',
    upcomingMatches: [
      {
        id: 1,
        teams: 'Player A vs Player B',
        date: '2024-01-21',
        time: '11:00 AM',
        venue: 'Tennis Court 1',
        status: 'upcoming'
      }
    ],
    availableSlots: [
      { id: 1, date: '2024-01-24', time: '8:00 AM', duration: '1 hour', price: '$30' },
      { id: 2, date: '2024-01-24', time: '10:00 AM', duration: '1 hour', price: '$30' },
      { id: 3, date: '2024-01-25', time: '3:00 PM', duration: '1 hour', price: '$30' }
    ],
    teamMembers: [
      { id: 1, name: 'Emma Davis', role: 'Singles Player', team: 'Individual' },
      { id: 2, name: 'Alex Martinez', role: 'Singles Player', team: 'Individual' },
      { id: 3, name: 'Sarah Lee', role: 'Doubles Player', team: 'Team Alpha' },
      { id: 4, name: 'Tom Chen', role: 'Doubles Player', team: 'Team Alpha' }
    ]
  },
  badminton: {
    name: 'Badminton',
    color: 'sports-badminton',
    icon: '🏸',
    description: 'Fast-paced Racket Sport',
    upcomingMatches: [
      {
        id: 1,
        teams: 'Doubles Team 1 vs Doubles Team 2',
        date: '2024-01-23',
        time: '6:00 PM',
        venue: 'Badminton Court A',
        status: 'upcoming'
      }
    ],
    availableSlots: [
      { id: 1, date: '2024-01-26', time: '7:00 AM', duration: '1 hour', price: '$25' },
      { id: 2, date: '2024-01-27', time: '5:00 PM', duration: '1 hour', price: '$25' },
      { id: 3, date: '2024-01-28', time: '6:00 PM', duration: '1 hour', price: '$25' }
    ],
    teamMembers: [
      { id: 1, name: 'Lisa Wang', role: 'Singles Champion', team: 'Individual' },
      { id: 2, name: 'Kevin Park', role: 'Doubles Player', team: 'Team Thunder' },
      { id: 3, name: 'Maya Patel', role: 'Doubles Player', team: 'Team Thunder' },
      { id: 4, name: 'Ryan Kim', role: 'Singles Player', team: 'Individual' }
    ]
  },
  football: {
    name: 'Football',
    color: 'sports-football',
    icon: '⚽',
    description: 'The Beautiful Game',
    upcomingMatches: [
      {
        id: 1,
        teams: 'United FC vs City FC',
        date: '2024-01-24',
        time: '4:00 PM',
        venue: 'Main Football Field',
        status: 'upcoming'
      },
      {
        id: 2,
        teams: 'Arsenal vs Chelsea',
        date: '2024-01-26',
        time: '6:00 PM',
        venue: 'Main Football Field',
        status: 'upcoming'
      }
    ],
    availableSlots: [
      { id: 1, date: '2024-01-28', time: '3:00 PM', duration: '2 hours', price: '$80' },
      { id: 2, date: '2024-01-29', time: '5:00 PM', duration: '2 hours', price: '$80' }
    ],
    teamMembers: [
      { id: 1, name: 'James Rodriguez', role: 'Forward', team: 'United FC' },
      { id: 2, name: 'Lucas Silva', role: 'Midfielder', team: 'United FC' },
      { id: 3, name: 'Carlos Mendez', role: 'Defender', team: 'City FC' },
      { id: 4, name: 'Diego Santos', role: 'Goalkeeper', team: 'City FC' }
    ]
  },
  basketball: {
    name: 'Basketball',
    color: 'sports-basketball',
    icon: '🏀',
    description: 'Fast and Furious',
    upcomingMatches: [
      {
        id: 1,
        teams: 'Lakers vs Warriors',
        date: '2024-01-25',
        time: '7:00 PM',
        venue: 'Basketball Court 1',
        status: 'upcoming'
      }
    ],
    availableSlots: [
      { id: 1, date: '2024-01-27', time: '6:00 PM', duration: '2 hours', price: '$60' },
      { id: 2, date: '2024-01-28', time: '8:00 PM', duration: '2 hours', price: '$60' }
    ],
    teamMembers: [
      { id: 1, name: 'Marcus Johnson', role: 'Point Guard', team: 'Lakers' },
      { id: 2, name: 'Anthony Davis', role: 'Center', team: 'Lakers' },
      { id: 3, name: 'Steph Curry', role: 'Shooting Guard', team: 'Warriors' },
      { id: 4, name: 'Klay Thompson', role: 'Small Forward', team: 'Warriors' }
    ]
  },
  kabaddi: {
    name: 'Kabaddi',
    color: 'sports-kabaddi',
    icon: '🤸',
    description: 'Traditional Indian Sport',
    upcomingMatches: [
      {
        id: 1,
        teams: 'Punjab vs Gujarat',
        date: '2024-01-27',
        time: '8:00 PM',
        venue: 'Kabaddi Arena',
        status: 'upcoming'
      }
    ],
    availableSlots: [
      { id: 1, date: '2024-01-29', time: '7:00 PM', duration: '1.5 hours', price: '$40' },
      { id: 2, date: '2024-01-30', time: '8:00 PM', duration: '1.5 hours', price: '$40' }
    ],
    teamMembers: [
      { id: 1, name: 'Pardeep Narwal', role: 'Raider', team: 'Punjab' },
      { id: 2, name: 'Fazel Atrachali', role: 'Defender', team: 'Gujarat' },
      { id: 3, name: 'Pawan Kumar', role: 'All-Rounder', team: 'Punjab' },
      { id: 4, name: 'Rohit Gulia', role: 'Raider', team: 'Gujarat' }
    ]
  }
};


