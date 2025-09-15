import { useState } from 'react'
import styles from '../../shared/layouts/MainLayout.module.css'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import { Modal } from '../../shared/ui/Modal/Modal'
import { Button } from '../../shared/ui/Button/Button'

function LayoutHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles['header-inner']}>
        <h1 className={styles['header-title']}>HomeWork</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button onClick={() => setIsModalOpen(true)}>
            О проекте
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          <p>Приложение для обучения</p>
          <p>Реализованы:</p>
          <ul>
            <li>Список постов</li>
            <li>Переключение светлой и тёмной темы</li>
            <li>Модальное окно (compound components)</li>
            <li>Фильтр по длине заголовка</li>
            <li>HOC withLoading</li>
            <li>Комментарии с разворачиванием</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </header>
  )
}

export { LayoutHeader }

