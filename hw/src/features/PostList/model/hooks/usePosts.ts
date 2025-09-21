import { useState, useEffect } from 'react';
import { posts as allPosts, type Post } from '../../../../lib/mocks/posts';

interface UsePostsReturn {
  posts: Post[] | null;
  loading: boolean;
  error: string | null;
}

export const usePosts = (userId?: number): UsePostsReturn => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let filteredPosts = allPosts;
      
        if (userId) {
          filteredPosts = allPosts;
        }
        
        setPosts(filteredPosts);
      } catch (_err) {
        setError('Ошибка при загрузке постов');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return { posts, loading, error };
};
