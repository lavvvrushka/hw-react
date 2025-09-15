import { useState } from 'react';
import { PostList } from '../../widgets/PostList/PostList';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import { Button } from '../../shared/ui/Button/Button';
import { posts as allPosts } from '../../lib/mocks/posts';
import { users } from '../../lib/mocks/users';
import styles from './PostsPage.module.css';

const PostListWithLoading = withLoading(PostList);

export const PostsPage = () => {
  const [minLength, setMinLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const postsToShow = selectedUserId 
    ? allPosts.filter(post => post.userId === selectedUserId)
    : allPosts;

  const filteredPosts = filterByLength(postsToShow, searchValue);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setSearchValue(minLength);
      setLoading(false);
    }, 700);
  };

  const selectedUser = selectedUserId ? users.find(u => u.id === selectedUserId) : null;

  return (
    <div className="app-container">
      <h1 className="app-title">
        {selectedUser ? `Посты пользователя ${selectedUser.name}` : 'Все посты'}
      </h1>
      <div className={styles.filterContainer}>
        <label className={styles.filterLabel}>Фильтр по автору:</label>
        <select 
          value={selectedUserId || ''} 
          onChange={(e) => setSelectedUserId(e.target.value ? Number(e.target.value) : null)}
          className={styles.userSelect}
        >
          <option value="">Все пользователи</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        
        {selectedUserId && (
          <Button onClick={() => setSelectedUserId(null)}>
            Сбросить фильтр
          </Button>
        )}
      </div>

      <PostLengthFilter value={minLength} onChange={setMinLength} />
      <Button onClick={handleSearch}>
        Поиск
      </Button>
      <PostListWithLoading posts={filteredPosts} loading={loading} />
      
      {filteredPosts.length === 0 && (
        <p className={styles.noPostsMessage}>
          {selectedUser 
            ? `У пользователя ${selectedUser.name} нет таких постов` 
            : 'Посты не найдены'
          }
        </p>
      )}
    </div>
  );
};
