import { useParams } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi';
import { PostList } from '../../widgets/PostList/PostList';
import type { Post } from '../../entities/post/model/types/post';

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  
  const { 
    data: apiPosts = [], 
    isLoading, 
    error 
  } = useGetPostsByUserIdQuery(userId);

  const userPosts: Post[] = apiPosts;

  if (isLoading) {
    return <div>Загрузка постов...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки постов</div>;
  }

  return (
    <div>
      <h2>Посты пользователя</h2>
      {userPosts.length > 0 ? (
        <PostList posts={userPosts} />
      ) : (
        <p>У этого пользователя нет постов</p>
      )}
    </div>
  );
};
