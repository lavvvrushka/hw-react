import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a: Post, b: Post) => b.id - a.id,
});

export interface PostsState {
  selectedPostId: number | null;
  filter: {
    userId?: number;
    searchQuery?: string;
  };
  loading: boolean;
  error: string | null;
}

const initialState: PostsState & ReturnType<typeof postsAdapter.getInitialState> = postsAdapter.getInitialState({
  selectedPostId: null,
  filter: {},
  loading: false,
  error: null,
});

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<number | null>) => {
      state.selectedPostId = action.payload;
    },
    setFilter: (state, action: PayloadAction<Partial<PostsState['filter']>>) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearFilter: (state) => {
      state.filter = {};
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
    clearPosts: postsAdapter.removeAll,
  },
});

export const {
  setSelectedPost,
  setFilter,
  clearFilter,
  setLoading,
  setError,
  addPost,
  addPosts,
  updatePost,
  removePost,
  clearPosts,
} = postSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectTotal: selectPostsTotal,
} = postsAdapter.getSelectors((state: RootState) => state.posts);

export const selectSelectedPost = (state: RootState) => 
  state.posts.selectedPostId ? selectPostById(state, state.posts.selectedPostId) : null;

export const selectPostsFilter = (state: RootState) => state.posts.filter;
export const selectPostsLoading = (state: RootState) => state.posts.loading;
export const selectPostsError = (state: RootState) => state.posts.error;

export const selectFilteredPosts = (state: RootState) => {
  const posts = selectAllPosts(state);
  const filter = selectPostsFilter(state);
  
  return posts.filter(post => {
    if (filter.userId && post.userId !== filter.userId) return false;
    if (filter.searchQuery) {
      const query = filter.searchQuery.toLowerCase();
      return post.title.toLowerCase().includes(query) || 
             post.body.toLowerCase().includes(query);
    }
    return true;
  });
};
