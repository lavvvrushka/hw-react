import { useUser } from '../../../app/providers/user/UserContext';
import type { User } from '../../../entities/user/model/slice/userSlice';
import styles from './UserSwitcher.module.css';

export const UserSwitcher = () => {
  const { currentUser, setCurrentUser, users, isLoading, isError } = useUser();

  if (isLoading) return <div>Загрузка пользователей...</div>;
  if (isError) return <div>Ошибка загрузки пользователей</div>;
  if (!currentUser) return <div>Пользователь не выбран</div>;

  return (
    <div className={styles.userSwitcher}>
      <label htmlFor="user-select" className={styles.label}>
        Текущий пользователь:
      </label>
      <select
        id="user-select"
        value={currentUser?.id || ''}
        onChange={(e) => {
          const selectedUser = users.find((user: User) => user.id === Number(e.target.value));
          if (selectedUser) {
            setCurrentUser(selectedUser as User);
          }
        }}
        className={styles.select}
      >
        {users.map((user: User) => (
          <option key={user.id} value={user.id}>
            {user.name} (@{user.username})
          </option>
        ))}
      </select>
    </div>
  );
};
