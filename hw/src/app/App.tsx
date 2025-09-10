<<<<<<< HEAD
import MainLayout from '../shared/layouts/MainLayout'
import PostList from '../widgets/PostList/PostList'
import { posts } from '../lib/mocks/posts'
import styles from './App.module.css'
=======
import { useState } from 'react'
import { MainLayout } from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'
import { Modal } from '../shared/ui/Modal/Modal'
import { Button } from '../shared/ui/Button/Button'
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import { posts } from '../lib/mocks/posts'
import './App.css'
>>>>>>> hm-2

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
<<<<<<< HEAD
    <MainLayout>
      <div className={styles.appContainer}>
        <h1 className={styles.appTitle}>Список постов</h1>
        <PostList posts={posts} />
      </div>
    </MainLayout>
=======
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
>>>>>>> hm-2
  )
}

export default App
