import React from 'react';
import styles from './Modal.module.css';

export function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className={styles['modal-body']}>{children}</div>;
}
