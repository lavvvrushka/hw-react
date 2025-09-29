# Redux Toolkit + RTK Query Integration Guide

## Обзор архитектуры

Проект настроен с использованием Redux Toolkit и RTK Query для управления состоянием и работы с API. Структура организована по принципу Feature-Sliced Design.

## Структура файлов

```
src/
├── app/providers/store/
│   ├── store.ts              # Конфигурация Redux store
│   ├── hooks.ts              # Типизированные хуки useAppDispatch, useAppSelector
│   └── StoreProvider.tsx     # React Provider для Redux
├── entities/
│   ├── post/
│   │   ├── api/postsApi.ts           # RTK Query API для постов
│   │   └── model/slice/postSlice.ts  # Redux slice с EntityAdapter
│   ├── comment/api/commentsApi.ts    # RTK Query API для комментариев
│   ├── album/api/albumsApi.ts        # RTK Query API для альбомов
│   ├── todo/api/todosApi.ts          # RTK Query API для задач
│   └── user/
│       ├── api/usersApi.ts           # RTK Query API для пользователей
│       └── model/slice/userSlice.ts  # Redux slice с EntityAdapter
```

## Основные возможности

### 1. RTK Query API

Каждая сущность имеет свой API с полным набором CRUD операций:

```typescript
// Пример использования в компоненте
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi';

const { data: posts, isLoading, error } = useGetPostsByUserIdQuery(userId);
```

### 2. Кэширование и инвалидация

RTK Query автоматически кэширует данные и управляет их актуальностью:

- **Теги**: Каждый endpoint помечает данные тегами (`Post`, `Comment`, `Album`, `Todo`, `User`)
- **Инвалидация**: При создании/обновлении/удалении автоматически инвалидируются соответствующие теги
- **Селективное обновление**: Обновляются только затронутые данные

### 3. Entity Adapters

Используются для нормализации и эффективной работы с коллекциями:

```typescript
// Пример селекторов из postSlice
import { 
  selectAllPosts, 
  selectPostById, 
  selectFilteredPosts 
} from '../../entities/post/model/slice/postSlice';

const posts = useAppSelector(selectAllPosts);
const post = useAppSelector(state => selectPostById(state, postId));
const filtered = useAppSelector(selectFilteredPosts);
```

### 4. Типизированные хуки

```typescript
import { useAppDispatch, useAppSelector } from '../../app/providers/store/hooks';

const dispatch = useAppDispatch();
const data = useAppSelector(selectSomeData);
```

## Примеры использования

### Загрузка данных по userId

```typescript
// Автоматическое кэширование по userId
const { data: userPosts } = useGetPostsByUserIdQuery(userId);
const { data: userTodos } = useGetTodosByUserIdQuery(userId);
const { data: userAlbums } = useGetAlbumsByUserIdQuery(userId);
```

### Работа с локальным состоянием

```typescript
import { setFilter, clearFilter } from '../../entities/post/model/slice/postSlice';

// Установка фильтра
dispatch(setFilter({ userId: 1, searchQuery: 'react' }));

// Очистка фильтра
dispatch(clearFilter());
```

### Мутации (создание/обновление/удаление)

```typescript
const [createPost] = useCreatePostMutation();
const [updatePost] = useUpdatePostMutation();
const [deletePost] = useDeletePostMutation();

// Создание поста
await createPost({ title: 'New Post', body: 'Content', userId: 1 });
```

## Оптимизация производительности

### 1. Селективные подписки
RTK Query подписывается только на нужные данные и обновляет компоненты только при изменении релевантных данных.

### 2. Нормализация данных
Entity Adapters нормализуют данные, избегая дублирования и ускоряя поиск по ID.

### 3. Автоматическая дедупликация
Одинаковые запросы автоматически дедуплицируются.

## Интеграция с существующим кодом

Для совместимости с существующими компонентами используется трансформация данных:

```typescript
// Преобразование API данных в формат существующих компонентов
const userPosts: MockPost[] = apiPosts.map(post => ({
  id: post.id,
  userId: post.userId,
  title: post.title,
  text: post.body, // API использует 'body', компоненты ожидают 'text'
  author: `User ${post.userId}`
}));
```

## Состояние загрузки и ошибок

RTK Query автоматически предоставляет состояния загрузки и ошибок:

```typescript
const { data, isLoading, error, isFetching } = useGetPostsQuery();

if (isLoading) return <div>Загрузка...</div>;
if (error) return <div>Ошибка загрузки</div>;
```

## Инвалидация кэша

Система тегов обеспечивает автоматическую инвалидацию:

```typescript
// При создании поста инвалидируются:
invalidatesTags: [{ type: 'Post', id: 'LIST' }]

// При обновлении конкретного поста:
invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }]
```

## Рекомендации

1. **Используйте RTK Query** для всех API вызовов вместо fetch/axios
2. **Применяйте Entity Adapters** для работы с коллекциями данных
3. **Используйте селекторы** для получения производных данных
4. **Группируйте связанные мутации** в одном API slice
5. **Настраивайте теги** для точной инвалидации кэша

## Отладка

1. Установите Redux DevTools Extension
2. Используйте RTK Query DevTools для мониторинга API вызовов
3. Проверяйте состояние кэша в Redux DevTools

Эта архитектура обеспечивает эффективное управление состоянием, автоматическое кэширование и синхронизацию данных с сервером.
