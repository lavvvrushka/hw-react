import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal-header']}>
          <h2>{title}</h2>
          <button className={styles['modal-close']} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className={styles['modal-body']}>{children}</div>
      </div>
    </div>,
    modalRoot
  )
}

export { Modal }
