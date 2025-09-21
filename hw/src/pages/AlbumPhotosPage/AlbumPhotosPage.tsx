import { useParams, Link } from 'react-router-dom';
import { useGetAlbumByIdQuery } from '../../entities/album/api/albumsApi';
import { useGetPhotosByAlbumIdQuery } from '../../entities/photo/api/photosApi';
import styles from './AlbumPhotosPage.module.css';

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>();
  const albumId = Number(id);
  
  const { data: album, isLoading: isLoadingAlbum, isError: isAlbumError } = 
    useGetAlbumByIdQuery(albumId);
  
  const { data: albumPhotos = [], isLoading: isLoadingPhotos, isError: isPhotosError } = 
    useGetPhotosByAlbumIdQuery(albumId);
  
  if (isLoadingAlbum || isLoadingPhotos) {
    return <div>Загрузка данных...</div>;
  }
  
  if (isAlbumError || isPhotosError || !album) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles['photos-container']}>
      <Link to={`/users/${album.userId}/albums`} className={styles['back-button']}>
        ← Вернуться к альбомам
      </Link>
      <h1>Фото из альбома "{album.title}"</h1>
      
      {albumPhotos.length > 0 ? (
        <div className={styles['photos-grid']}>
          {albumPhotos.map(photo => (
            <div key={photo.id} className={styles['photo-card']}>
              <img 
                src={photo.thumbnailUrl} 
                alt={photo.title}
                className={styles['photo-image']}
                loading="lazy"
              />
              <h3 className={styles['photo-title']}>{photo.title}</h3>
              <p className={styles['photo-info']}>Фото #{photo.id}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>В альбоме пока нет фотографий</p>
      )}
    </div>
  );
};
