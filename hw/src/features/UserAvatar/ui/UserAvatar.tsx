import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../app/providers/user/UserContext';
import styles from './UserAvatar.module.css';

export const UserAvatar = () => {
  const { currentUser, setCurrentUser, users } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleUserChange = (userId: number) => {
    const selectedUser = users.find(user => user.id === userId);
    if (selectedUser) {
      setCurrentUser(selectedUser);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.userAvatar}>
      <button 
        className={styles.avatarButton}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        title={currentUser.name}
      >
        <span className={styles.userName}>{currentUser.name}</span>
        <span className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}>
          ▼
        </span>
      </button>

      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Сменить пользователя</div>
            {users.map(user => (
              <button
                key={user.id}
                className={`${styles.dropdownItem} ${user.id === currentUser.id ? styles.active : ''}`}
                onClick={() => handleUserChange(user.id)}
              >
                <span>{user.name}</span>
              </button>
            ))}
          </div>
          <div className={styles.divider}></div>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Мои разделы</div>
            <Link 
              to={`/users/${currentUser.id}/posts`}
              className={styles.dropdownItem}
              onClick={() => setIsDropdownOpen(false)}
            >
              Мои посты
            </Link>
            <Link 
              to={`/users/${currentUser.id}/albums`}
              className={styles.dropdownItem}
              onClick={() => setIsDropdownOpen(false)}
            >
              Мои альбомы
            </Link>
            <Link 
              to={`/users/${currentUser.id}/todos`}
              className={styles.dropdownItem}
              onClick={() => setIsDropdownOpen(false)}
            >
              Мои задачи
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
