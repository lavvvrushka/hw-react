import { useParams } from 'react-router-dom';
import { todos } from '../../lib/mocks/todos';
import styles from './UserTodosPage.module.css';

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userTodos = todos.filter(todo => todo.userId === Number(id));

  return (
    <div className={styles['todos-container']}>
      {userTodos.length > 0 ? (
        <ul className={styles['todos-list']}>
          {userTodos.map(todo => (
            <li key={todo.id} className={styles['todo-item']}>
              <span className={`${styles['todo-text']} ${todo.completed ? styles.completed : ''}`}>
                {todo.title}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>У этого пользователя пока нет задач</p>
      )}
    </div>
  );
};
