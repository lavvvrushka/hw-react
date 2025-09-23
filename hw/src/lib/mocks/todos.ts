export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export const todos: Todo[] = [
  { id: 1, title: 'Изучить React Router', completed: true, userId: 1 },
  { id: 2, title: 'Создать компоненты навигации', completed: false, userId: 1 },
  { id: 3, title: 'Написать тесты для приложения', completed: false, userId: 2 },
  { id: 4, title: 'Оптимизировать производительность', completed: true, userId: 2 },
  { id: 5, title: 'Добавить темную тему', completed: true, userId: 3 }
];
