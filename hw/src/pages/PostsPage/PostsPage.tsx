import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PostList } from '../../widgets/PostList/PostList';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { useGetUsersQuery } from '../../entities/user/api/usersApi';
import { Button } from '../../shared/ui/Button/Button';
import styles from './PostsPage.module.css';

export const PostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minLength, setMinLength] = useState(0);
  const [searchValue, setSearchValue] = useState(0);
  
  const { data: posts = [], isLoading: isLoadingPosts, isError: isPostsError } = useGetPostsQuery();
  const { data: users = [], isLoading: isLoadingUsers, isError: isUsersError } = useGetUsersQuery();
  
  const selectedUserId = useMemo(() => {
    const userId = searchParams.get('userId');
    return userId ? parseInt(userId, 10) : null;
  }, [searchParams]);
  
  const handleUserChange = (userId: number | null) => {
    const params = new URLSearchParams(searchParams);
    if (userId) {
      params.set('userId', userId.toString());
    } else {
      params.delete('userId');
    }
    setSearchParams(params);
  };

  const postsToShow = useMemo(() => {
    if (!selectedUserId) return posts;
    return posts.filter(post => post.userId === selectedUserId);
  }, [posts, selectedUserId]);

  const filteredPosts = useMemo(() => {
    return filterByLength(postsToShow, searchValue);
  }, [postsToShow, searchValue]);

  const handleSearch = () => {
    setSearchValue(minLength);
  };

  const selectedUser = useMemo(() => {
    if (!selectedUserId) return null;
    return users.find(u => u.id === selectedUserId);
  }, [users, selectedUserId]);

  if (isLoadingPosts || isLoadingUsers) {
    return <div>Загрузка данных...</div>;
  }

  if (isPostsError || isUsersError) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className="app-container">
      <h1 className="app-title">
        {selectedUser ? `Посты пользователя ${selectedUser.name}` : 'Все посты'}
      </h1>
      <div className={styles.filtersContainer}>
        <div className={styles.filterSection}>
          <h3>Фильтры</h3>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Поиск по автору:</label>
            <select 
              value={selectedUserId || ''} 
              onChange={(e) => handleUserChange(e.target.value ? Number(e.target.value) : null)}
              className={styles.userSelect}
              disabled={isLoadingPosts || isLoadingUsers}
            >
              <option value="">Все пользователи</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Фильтр по длине:</label>
            <PostLengthFilter 
              value={minLength}
              onChange={setMinLength}
            />
            <Button onClick={handleSearch}>
              Применить
            </Button>
        </div>
        </div>
        <div className={styles.content}>
          {filteredPosts.length > 0 ? (
            <PostList posts={filteredPosts} />
          ) : (
            <div className={styles.noPostsMessage}>
              Посты не найдены. Попробуйте изменить параметры фильтрации.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
