import { useGetUsersQuery } from '../../api/usersApi';

export const useUsers = () => {
  const { data: users = [], isLoading, isError } = useGetUsersQuery();
  
  return {
    users,
    isLoading,
    isError,
  };
};
