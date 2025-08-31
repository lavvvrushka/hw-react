import { useState } from 'react'
import MainLayout from '../shared/layouts/MainLayout'
import PostList from '../widgets/PostList'
import Modal from '../shared/ui/Modal/Modal'
import Button from '../shared/ui/Button/Button'
import { ThemeProvider } from '../shared/lib/theme/ThemeContext'
import './App.css'

type Post = {
  id: number
  title: string
  text: string
  author?: string
}

const posts: Post[] = [
  { id: 1, title: 'Мой первый пост', text: 'Это мой первый пост в React приложении! Я изучаю передачу данных через props.', author: 'Студент' },
  { id: 2, title: 'Изучаю TypeScript', text: 'TypeScript помогает писать более надежный код с типизацией.', author: 'Разработчик' },
  { id: 3, title: 'Компонентный подход', text: 'React использует компонентный подход для создания пользовательских интерфейсов.', author: 'Программист' },
]

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ThemeProvider>
      <MainLayout>
        <div className="app-container">
          <h1 className="app-title">Список постов</h1>
          <div className="app-buttons">
            <Button onClick={openModal}>
              О проекте
            </Button>
          </div>
          <PostList posts={posts} />
          
          <Modal isOpen={isModalOpen} onClose={closeModal} title="О проекте">
            <p>Приложение для обчучения</p>
            <p>Реализованы:</p>
            <ul>
              <li>Список постов</li>
              <li>Переключение светлой и тёмной темы</li>
              <li>Модальное окно</li>
              <li>Простые кнопки</li>
            </ul>
          </Modal>
        </div>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
