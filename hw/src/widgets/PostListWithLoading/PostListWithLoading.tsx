import { PostList, type PostListProps } from '../PostList/PostList';
import { withLoading } from '../../shared/lib/hoc/withLoading';

type PostListWithLoadingProps = PostListProps & {
  loading: boolean;
};

export const PostListWithLoading = withLoading<PostListWithLoadingProps>(PostList);
