import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { UserTabs } from '../../../widgets/UserTabs/UserTabs';
import { useUser } from '../../lib/context/UserContext';
import styles from './UserLayout.module.css';

export const UserLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useUser();
  const displayUserId = currentUser?.id.toString() || id;
  const displayUserName = currentUser?.name || `Пользователь ${id}`;

  return (
    <div className={styles.userLayout}>
      <div className={styles.header}>
        <h1 className={styles.title}>{displayUserName}</h1>
        <UserTabs userId={displayUserId!} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
