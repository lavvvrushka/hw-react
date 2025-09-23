import React from 'react';
import styles from './Modal.module.css';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

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

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
