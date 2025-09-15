import { useState } from 'react';
import styles from './CommentList.module.css';
import type { Comment } from '../../../lib/mocks/comments';
import { Button } from '../../../shared/ui/Button/Button';

export function CommentList({ comments }: { comments: Comment[] }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(c => !c);

  return (
    <div className={styles['comment-list-container']}>
      <Button onClick={toggle}>
        {collapsed ? 'Показать комментарии' : 'Скрыть комментарии'}
      </Button>
      {!collapsed && (
        <ul className={styles['comment-list']}>
          {comments.map(c => (
            <li key={c.id}>{c.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
