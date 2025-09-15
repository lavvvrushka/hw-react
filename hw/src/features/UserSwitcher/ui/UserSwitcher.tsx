import { useUser } from '../../../app/providers/user/UserContext';
import styles from './UserSwitcher.module.css';

export const UserSwitcher = () => {
  const { currentUser, setCurrentUser, users } = useUser();

  return (
    <div className={styles.userSwitcher}>
      <label htmlFor="user-select" className={styles.label}>
        Текущий пользователь:
      </label>
      <select
        id="user-select"
        value={currentUser.id}
        onChange={(e) => {
          const selectedUser = users.find(user => user.id === Number(e.target.value));
          if (selectedUser) {
            setCurrentUser(selectedUser);
          }
        }}
        className={styles.select}
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};
