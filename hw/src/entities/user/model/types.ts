export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

export type CreateUserDto = Omit<User, 'id'>;
export type UpdateUserDto = Partial<CreateUserDto>;
