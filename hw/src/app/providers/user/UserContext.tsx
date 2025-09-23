import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../../../lib/mocks/users';
import { users } from '../../../lib/mocks/users';

interface UserContextType {
  currentUser: User;
  setCurrentUser: (user: User) => void;
  users: User[];
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(users[0]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, users }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
