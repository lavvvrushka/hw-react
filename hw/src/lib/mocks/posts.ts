export type Post = {
  id: number
  title: string
  text: string
  userId: number
  author?: string
}

export const posts: Post[] = [
  { id: 1, title: 'Мой первый пост', text: 'Это мой первый пост в React приложении! Я изучаю передачу данных через props.', userId: 1, author: 'Анна Иванова' },
  { id: 2, title: 'Изучаю TypeScript', text: 'TypeScript помогает писать более надежный код с типизацией.', userId: 2, author: 'Петр Петров' },
  { id: 3, title: 'Компонентный подход', text: 'React использует компонентный подход для создания пользовательских интерфейсов.', userId: 1, author: 'Анна Иванова' },
  { id: 4, title: 'Работа с состоянием', text: 'useState и useEffect - основные хуки для работы с состоянием в React.', userId: 3, author: 'Мария Сидорова' },
  { id: 5, title: 'Роутинг в React', text: 'React Router позволяет создавать одностраничные приложения с навигацией.', userId: 2, author: 'Петр Петров' },
  { id: 6, title: 'Стилизация компонентов', text: 'CSS модули помогают изолировать стили компонентов друг от друга.', userId: 4, author: 'Алексей Козлов' },
  { id: 7, title: 'Тестирование React приложений', text: 'Jest и React Testing Library - отличные инструменты для тестирования.', userId: 3, author: 'Мария Сидорова' },
  { id: 8, title: 'Оптимизация производительности', text: 'useMemo и useCallback помогают оптимизировать производительность React приложений.', userId: 5, author: 'Елена Новикова' },
]
