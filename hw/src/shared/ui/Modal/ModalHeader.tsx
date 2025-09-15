import React from 'react';
import styles from './Modal.module.css';

export function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className={styles['modal-header']}><span>{children}</span></div>;
}
