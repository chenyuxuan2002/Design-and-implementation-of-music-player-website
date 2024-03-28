import {create} from 'zustand'

interface User {
  userId: number;
  username: string;
  email: string;
  // Add other fields as necessary, excluding sensitive ones like password
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}
const useUserStore = create<UserState>((set) => {
  // Check if it is in the browser environment
  const initialUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null;
  return {
    user: initialUser, // Initialize user from localStorage if available
    setUser: (user) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user)); // Persist user to localStorage
      }
      set({ user });
    },
    logout: () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user'); // Clear user from localStorage
      }
      set({ user: null });
    },
  };
});

export default useUserStore;
