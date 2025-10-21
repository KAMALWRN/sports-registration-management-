// API service for backend integration
// Vite uses import.meta.env, not process.env
const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL)
  ? import.meta.env.VITE_API_URL
  : 'http://localhost:3001/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  // Dashboard Statistics
  async getDashboardStats() {
    return this.request('/dashboard/stats');
  }

  // Team Management
  async getTeams() {
    return this.request('/teams');
  }

  async getTeamById(id) {
    return this.request(`/teams/${id}`);
  }

  async createTeam(teamData) {
    return this.request('/teams', {
      method: 'POST',
      body: JSON.stringify(teamData),
    });
  }

  async updateTeam(id, teamData) {
    return this.request(`/teams/${id}`, {
      method: 'PUT',
      body: JSON.stringify(teamData),
    });
  }

  async deleteTeam(id) {
    return this.request(`/teams/${id}`, {
      method: 'DELETE',
    });
  }

  // Team Slot Management
  async extendTeamSlot(id, extraMinutes) {
    return this.request(`/teams/${id}/extend-slot`, {
      method: 'POST',
      body: JSON.stringify({ extraMinutes }),
    });
  }

  async extendTeamSlots(id, extraSlots) {
    return this.request(`/teams/${id}/extend-slots`, {
      method: 'POST',
      body: JSON.stringify({ extraSlots }),
    });
  }

  // Payment Management
  async getPayments() {
    return this.request('/payments');
  }

  async getPaymentById(id) {
    return this.request(`/payments/${id}`);
  }

  async updatePaymentStatus(id, status) {
    return this.request(`/payments/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async generateReceipt(paymentId) {
    return this.request(`/payments/${paymentId}/receipt`, {
      method: 'GET',
    });
  }

  // Registration Management
  async getRegistrations() {
    return this.request('/registrations');
  }

  async getRegistrationById(id) {
    return this.request(`/registrations/${id}`);
  }

  async createRegistration(registrationData) {
    return this.request('/registrations', {
      method: 'POST',
      body: JSON.stringify(registrationData),
    });
  }

  async updateRegistration(id, registrationData) {
    return this.request(`/registrations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(registrationData),
    });
  }

  // Events Management
  async getEvents() {
    return this.request('/events');
  }

  async getEventById(id) {
    return this.request(`/events/${id}`);
  }

  // Sports Management
  async getSports() {
    return this.request('/sports');
  }

  async getSportById(id) {
    return this.request(`/sports/${id}`);
  }

  // Reports
  async getRegistrationReport(startDate, endDate) {
    return this.request(`/reports/registrations?start=${startDate}&end=${endDate}`);
  }

  async getPaymentReport(startDate, endDate) {
    return this.request(`/reports/payments?start=${startDate}&end=${endDate}`);
  }

  async getTeamReport(sportId) {
    return this.request(`/reports/teams?sport=${sportId}`);
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
