import { Outlet, useParams, Link } from 'react-router-dom';
import { albums } from '../../lib/mocks/albums';
import { users } from '../../lib/mocks/users';
import styles from './AlbumLayout.module.css';

export const AlbumLayout = () => {
  const { id } = useParams<{ id: string }>();
  
  const album = albums.find(a => a.id === Number(id));
  const user = album ? users.find(u => u.id === album.userId) : null;
  
  if (!album || !user) {
    return <div className={styles.error}>Альбом не найден</div>;
  }

  return (
    <div className={styles.albumLayout}>
      <div className={styles.header}>
        <h2 className={styles.title}>Альбом: {album.title}</h2>
        <p className={styles.author}>Автор: {user.name}</p>
        <nav className={styles.nav}>
          <Link 
            to={`/users/${user.id}/albums`} 
            className={styles.navLink}
          >
            ← Все альбомы пользователя
          </Link>
          <Link 
            to={`/albums/${id}/photos`} 
            className={styles.navLink}
          >
            Фотографии
          </Link>
        </nav>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
