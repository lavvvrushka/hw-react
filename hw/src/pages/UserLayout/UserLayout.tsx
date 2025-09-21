import { Outlet, useParams, Link } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import styles from './UserLayout.module.css';

export const UserLayout = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  
  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);
  
  if (isLoading) {
    return <div className={styles.loading}>Загрузка пользователя...</div>;
  }
  
  if (isError || !user) {
    return <div className={styles.error}>Пользователь не найден</div>;
  }

  return (
    <div className={styles.userLayout}>
      <div className={styles.header}>
        <h2 className={styles.title}>Профиль пользователя: {user.name}</h2>
        <nav className={styles.nav}>
          <Link 
            to={`/users/${id}/posts`} 
            className={styles.navLink}
          >
            Посты
          </Link>
          <Link 
            to={`/users/${id}/albums`} 
            className={styles.navLink}
          >
            Альбомы
          </Link>
          <Link 
            to={`/users/${id}/todos`} 
            className={styles.navLink}
          >
            Задачи
          </Link>
        </nav>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
