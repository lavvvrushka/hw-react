import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export interface UsersState {
  currentUserId: number | null;
  selectedUserId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState & ReturnType<typeof usersAdapter.getInitialState> = usersAdapter.getInitialState({
  currentUserId: null,
  selectedUserId: null,
  loading: false,
  error: null,
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<number>) => {
      state.currentUserId = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<number | null>) => {
      state.selectedUserId = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
    clearUsers: usersAdapter.removeAll,
  },
});

export const {
  setCurrentUser,
  setSelectedUser,
  setLoading,
  setError,
  addUser,
  addUsers,
  updateUser,
  removeUser,
  clearUsers,
} = userSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectTotal: selectUsersTotal,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export const selectCurrentUser = (state: RootState) => 
  state.users.currentUserId ? selectUserById(state, state.users.currentUserId) : null;

export const selectSelectedUser = (state: RootState) => 
  state.users.selectedUserId ? selectUserById(state, state.users.selectedUserId) : null;

export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUsersError = (state: RootState) => state.users.error;
