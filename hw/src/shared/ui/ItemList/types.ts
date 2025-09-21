import type { ReactNode } from 'react';

export interface ItemListProps<T> {
  /**
   * Массив элементов для отображения
   */
  items: T[];
  
  /**
   * Функция для рендеринга каждого элемента
   */
  renderItem: (item: T) => ReactNode;
  
  /**
   * Функция для извлечения уникального ключа для каждого элемента
   */
  keyExtractor: (item: T) => string | number;
  
  /**
   * Дополнительные CSS-классы
   */
  className?: string;
  
  /**
   * Сообщение, отображаемое при пустом списке
   */
  emptyListMessage?: string;
}
