export type Post = {
  id: number
  title: string
  text: string
  author?: string
}

export const posts: Post[] = [
  { id: 1, title: 'Мой первый пост', text: 'Это мой первый пост в React приложении! Я изучаю передачу данных через props.', author: 'Студент' },
  { id: 2, title: 'Изучаю TypeScript', text: 'TypeScript помогает писать более надежный код с типизацией.', author: 'Разработчик' },
  { id: 3, title: 'Компонентный подход', text: 'React использует компонентный подход для создания пользовательских интерфейсов.', author: 'Программист' },
]
