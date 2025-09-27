import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/providers/store/hooks';
import { 
  setFilter, 
  clearFilter, 
  selectPostsFilter, 
  selectFilteredPosts,
  selectPostsLoading 
} from '../../entities/post/model/slice/postSlice';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { addPosts } from '../../entities/post/model/slice/postSlice';
import { useEffect } from 'react';

export const PostFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectPostsFilter);
  const filteredPosts = useAppSelector(selectFilteredPosts);
  const isLoading = useAppSelector(selectPostsLoading);
  
  const [searchQuery, setSearchQuery] = useState(filter.searchQuery || '');
  const [selectedUserId, setSelectedUserId] = useState(filter.userId || '');

  const { data: posts = [] } = useGetPostsQuery();

  useEffect(() => {
    if (posts.length > 0) {
      dispatch(addPosts(posts));
    }
  }, [posts, dispatch]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    dispatch(setFilter({ searchQuery: query }));
  };

  const handleUserIdChange = (userId: string) => {
    setSelectedUserId(userId);
    dispatch(setFilter({ userId: userId ? Number(userId) : undefined }));
  };

  const handleClearFilter = () => {
    setSearchQuery('');
    setSelectedUserId('');
    dispatch(clearFilter());
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
      <h3>Фильтр постов (Redux Example)</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <label>
          Поиск по тексту: 
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Введите текст для поиска..."
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          Фильтр по пользователю: 
          <select
            value={selectedUserId}
            onChange={(e) => handleUserIdChange(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="">Все пользователи</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
              <option key={id} value={id}>Пользователь {id}</option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={handleClearFilter} style={{ padding: '5px 10px' }}>
        Очистить фильтры
      </button>

      <div style={{ marginTop: '20px' }}>
        <h4>Результаты ({filteredPosts.length} постов):</h4>
        {isLoading ? (
          <p>Загрузка...</p>
        ) : (
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {filteredPosts.map(post => (
              <div key={post.id} style={{ 
                border: '1px solid #eee', 
                padding: '10px', 
                margin: '5px 0',
                borderRadius: '4px'
              }}>
                <h5>#{post.id}: {post.title}</h5>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Пользователь: {post.userId} | Текст: {post.body.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
