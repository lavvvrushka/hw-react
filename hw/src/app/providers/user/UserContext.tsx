import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useGetUsersQuery } from '../../../entities/user/api/usersApi';
import type { User } from '../../../entities/user/model/slice/userSlice';
import { UserContext } from './userContextApi';

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
export default UserProvider;
