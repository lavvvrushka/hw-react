import React from 'react';
import styles from './Modal.module.css';

export function Modal({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-content']}>
        {children}
        <button onClick={onClose} className={styles['modal-close']}>X</button>
      </div>
    </div>
  );
}

Modal.Header = function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className={styles['modal-header']}><span>{children}</span></div>;
};

Modal.Body = function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className={styles['modal-body']}>{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: { children: React.ReactNode }) {
  return <div style={{ textAlign: 'right', marginTop: 12 }}>{children}</div>;
};
