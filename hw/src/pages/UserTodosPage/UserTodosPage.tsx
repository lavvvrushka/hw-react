import { useParams } from 'react-router-dom';
import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi';
import { useGetUserByIdQuery } from '../../entities/user/api/usersApi';
import styles from './UserTodosPage.module.css';

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  
  const { 
    data: userTodos = [], 
    isLoading: isLoadingTodos, 
    isError: isTodosError 
  } = useGetTodosByUserIdQuery(userId);
  
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isUserError
  } = useGetUserByIdQuery(userId);
  
  const isLoading = isLoadingTodos || isLoadingUser;
  const isError = isTodosError || isUserError;

  if (isLoading) {
    return <div>Загрузка данных...</div>;
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }

  return (
    <div className={styles['todos-container']}>
      <h1>Задачи пользователя {user?.name || 'Загрузка...'}</h1>
      
      {userTodos.length > 0 ? (
        <ul className={styles['todos-list']}>
          {userTodos.map(todo => (
            <li 
              key={todo.id} 
              className={`${styles['todo-item']} ${todo.completed ? styles.completed : ''}`}
            >
              <input 
                type="checkbox" 
                checked={todo.completed} 
                readOnly 
                className={styles['todo-checkbox']}
              />
              <span className={styles['todo-text']}>
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
