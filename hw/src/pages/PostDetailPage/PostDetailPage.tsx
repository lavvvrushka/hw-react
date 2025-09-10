import { useParams, Link } from 'react-router-dom';
import { posts } from '../../lib/mocks/posts';
import { PostCard } from '../../entities/post/ui/PostCard';

export const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div>
        <h1>Пост не найден</h1>
        <Link to="/posts" style={{ 
          display: 'inline-block', 
          padding: '8px 16px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          ← Вернуться к постам
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/posts" style={{ 
        display: 'inline-block', 
        padding: '8px 16px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '4px',
        marginBottom: '1rem'
      }}>
        ← Вернуться к постам
      </Link>
      <h1>Детали поста</h1>
      <PostCard post={post} />
    </div>
  );
};
