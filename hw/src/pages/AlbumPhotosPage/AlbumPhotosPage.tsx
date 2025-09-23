import { useParams, Link } from 'react-router-dom';
import { photos } from '../../lib/mocks/photos';
import { albums } from '../../lib/mocks/albums';
import styles from './AlbumPhotosPage.module.css';

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  const albumPhotos = photos.filter(photo => photo.albumId === Number(id));
  const album = albums.find(album => album.id === Number(id));

  return (
    <div className={styles['photos-container']}>
      <Link to={`/users/${album?.userId}/albums`} className={styles['back-button']}>
        ← Вернуться к альбомам
      </Link>
      <h1>Фото из альбома "{album?.title || id}"</h1>
      
      {albumPhotos.length > 0 ? (
        <div className={styles['photos-grid']}>
          {albumPhotos.map(photo => (
            <div key={photo.id} className={styles['photo-card']}>
              <img 
                src={photo.thumbnailUrl} 
                alt={photo.title}
                className={styles['photo-image']}
              />
              <h3 className={styles['photo-title']}>{photo.title}</h3>
              <p className={styles['photo-info']}>Фото #{photo.id}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>В альбоме {id} пока нет фотографий</p>
      )}
    </div>
  );
};
