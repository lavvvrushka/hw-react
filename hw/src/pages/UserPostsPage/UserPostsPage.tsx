import { useParams } from 'react-router-dom';
import { posts } from '../../lib/mocks/posts';
import { PostList } from '../../widgets/PostList/PostList';

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userPosts = posts.filter(post => post.userId === Number(id));

  return (
    <div>
      {userPosts.length > 0 ? (
        <PostList posts={userPosts} />
      ) : (
        <p>У этого пользователя нет постов</p>
      )}
    </div>
  );
};
