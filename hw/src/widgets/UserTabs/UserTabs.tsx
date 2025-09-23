import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.css';

interface UserTabsProps {
  userId: string;
}

export const UserTabs = ({ userId }: UserTabsProps) => {
  return (
    <nav className={styles.tabs}>
      <NavLink 
        to={`/users/${userId}/posts`}
        className={({ isActive }) => 
          `${styles.tab} ${isActive ? styles.active : ''}`
        }
      >
        Посты
      </NavLink>
      <NavLink 
        to={`/users/${userId}/albums`}
        className={({ isActive }) => 
          `${styles.tab} ${isActive ? styles.active : ''}`
        }
      >
        Альбомы
      </NavLink>
      <NavLink 
        to={`/users/${userId}/todos`}
        className={({ isActive }) => 
          `${styles.tab} ${isActive ? styles.active : ''}`
        }
      >
        Задачи
      </NavLink>
    </nav>
  );
};
