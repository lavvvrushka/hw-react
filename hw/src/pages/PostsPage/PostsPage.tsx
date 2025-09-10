import { useState } from 'react';
import { PostList } from '../../widgets/PostList/PostList';
import { Modal } from '../../shared/ui/Modal/Modal';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { Button } from '../../shared/ui/Button/Button';
import { posts as allPosts } from '../../lib/mocks/posts';

const PostListWithLoading = withLoading(PostList);

export const PostsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minLength, setMinLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(0);

  const filteredPosts = filterByLength(allPosts, searchValue);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setSearchValue(minLength);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Список постов</h1>
      <div className="app-buttons">
        <Button onClick={() => setIsModalOpen(true)}>
          О проекте
        </Button>
      </div>
      <PostLengthFilter value={minLength} onChange={setMinLength} />
      <Button onClick={handleSearch}>
        Поиск
      </Button>
      <PostListWithLoading posts={filteredPosts} loading={loading} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          <p>Приложение для обучения React и роутингу</p>
          <p>Реализованы:</p>
          <ul>
            <li>Список постов</li>
            <li>Роутинг с React Router</li>
            <li>Навигация между страницами</li>
            <li>Переключение светлой и тёмной темы</li>
            <li>Модальное окно (compound components)</li>
            <li>Фильтр по длине заголовка</li>
            <li>HOC withLoading</li>
            <li>Комментарии с разворачиванием</li>
            <li>Кастомный хук usePosts</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
