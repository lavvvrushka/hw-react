import React from 'react';
import { users } from '../../../lib/mocks/users';
import { useUser } from '../../../shared/lib/context/UserContext';
import styles from './UserSelector.module.css';

export const UserSelector: React.FC = () => {
  const { currentUser, setCurrentUser } = useUser();

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = parseInt(event.target.value);
    const selectedUser = users.find(user => user.id === userId) || null;
    setCurrentUser(selectedUser);
  };

  return (
    <div className={styles.userSelector}>
      <label htmlFor="user-select" className={styles.label}>
        Пользователь:
      </label>
      <select
        id="user-select"
        value={currentUser?.id || ''}
        onChange={handleUserChange}
        className={styles.select}
      >
        <option value="">Выберите пользователя</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
