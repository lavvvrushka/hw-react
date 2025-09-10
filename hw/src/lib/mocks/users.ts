export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

export const users: User[] = [
  { id: 1, name: 'Анна Иванова', email: 'anna@example.com', username: 'anna_i' },
  { id: 2, name: 'Петр Петров', email: 'petr@example.com', username: 'petr_p' },
  { id: 3, name: 'Мария Сидорова', email: 'maria@example.com', username: 'maria_s' },
  { id: 4, name: 'Алексей Козлов', email: 'alex@example.com', username: 'alex_k' },
  { id: 5, name: 'Елена Новикова', email: 'elena@example.com', username: 'elena_n' }
];
