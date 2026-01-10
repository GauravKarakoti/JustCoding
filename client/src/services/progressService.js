const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://justcoding.onrender.com";

export const progressService = {
  // Fetch full dashboard data
  getDashboard: async (userId) => {
    try {
      const response = await fetch(`${API_BASE}/api/progress/dashboard/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch dashboard');
      return await response.json();
    } catch (error) {
      console.error('Dashboard fetch error:', error);
      return null;
    }
  },

  // Record a learning event (run code, use AI, etc.)
  recordEvent: async (userId, eventType, metadata = {}) => {
    try {
      const response = await fetch(`${API_BASE}/api/progress/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, eventType, metadata })
      });
      return await response.json();
    } catch (error) {
      console.error('Event record error:', error);
      return null;
    }
  },

  // Get leaderboard data
  getLeaderboard: async (timeframe = 'all-time') => {
    try {
      const response = await fetch(`${API_BASE}/api/progress/leaderboard?timeframe=${timeframe}`);
      return await response.json();
    } catch (error) {
      console.error('Leaderboard fetch error:', error);
      return null;
    }
  },

  // Trigger PDF export
  exportData: async (userId) => {
    try {
      const response = await fetch(`${API_BASE}/api/progress/export/${userId}`);
      return await response.json();
    } catch (error) {
      console.error('Export error:', error);
      return null;
    }
  }
};