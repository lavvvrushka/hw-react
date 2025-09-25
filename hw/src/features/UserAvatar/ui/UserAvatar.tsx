import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../app/providers/user/UserContext';
import type { User } from '../../../entities/user/model/slice/userSlice';
import styles from './UserAvatar.module.css';

export const UserAvatar = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserAvatar must be used within a UserProvider');
  }
  const { currentUser, setCurrentUser, users, isLoading } = context;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleUserChange = (userId: number) => {
    const selectedUser = users.find((user: User) => user.id === userId);
    if (selectedUser) {
      setCurrentUser(selectedUser);
      navigate(`/users/${userId}/posts`);
    }
    setIsDropdownOpen(false);
  };

  if (isLoading) {
    return (
      <div className={styles.userAvatar}>
        <div className={styles.loading}>Загрузка...</div>
      </div>
    );
  }

  if (!currentUser) {
    return null;
  }

  return (
    <div className={styles.userAvatar}>
      <button 
        className={styles.avatarButton}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        title={currentUser?.name || 'Пользователь'}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <span className={styles.userName}>
          {currentUser?.name || 'Пользователь'}
        </span>
        <span 
          className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {isDropdownOpen && (
        <div className={styles.dropdown} role="menu">
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Выбрать пользователя</div>
            {users.length > 0 ? (
              users.map((user: User) => (
                <button
                  key={user.id}
                  className={`${styles.dropdownItem} ${user.id === currentUser?.id ? styles.active : ''}`}
                  onClick={() => handleUserChange(user.id)}
                  role="menuitem"
                >
                  <span>{user.name}</span>
                </button>
              ))
            ) : (
              <div className={styles.dropdownItem}>Нет доступных пользователей</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
