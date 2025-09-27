import { useState } from 'react';
import styles from './CommentList.module.css';
import { Button } from '../../../shared/ui/Button/Button';
import type { Comment } from '../../../../src/entities/comment/api/commentsApi';

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
          {comments.map(comment => (
            <li key={comment.id} className={styles.comment}>
              <h4>{comment.name} ({comment.email})</h4>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
