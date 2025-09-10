import { useParams } from 'react-router-dom';
import { UserTabs } from '../../widgets/UserTabs/UserTabs';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import { PostList } from '../../widgets/PostList/PostList';

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading, error } = usePosts(Number(id));

  return (
    <div>
      <h1>Посты пользователя {id}</h1>
      <UserTabs userId={id!} />
      <div>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {posts && <PostList posts={posts} />}
      </div>
    </div>
  );
};
