import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useGetUsersQuery } from '../../../entities/user/api/usersApi';
import type { User } from '../../../entities/user/model/slice/userSlice';

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  users: User[];
  isLoading: boolean;
  isError: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { data: users = [], isLoading, isError } = useGetUsersQuery();

  useEffect(() => {
    if (users.length > 0 && !currentUser) {
      setCurrentUser(users[0]);
    }
  }, [users, currentUser]);

  const handleSetCurrentUser = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ 
      currentUser, 
      setCurrentUser: handleSetCurrentUser, 
      users,
      isLoading,
      isError
    }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserProvider;
