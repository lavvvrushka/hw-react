import { ReactNode } from 'react';
import styles from './ItemList.module.css';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
  emptyText?: string;
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  emptyText = 'Список пуст'
}: ItemListProps<T>) {
  if (!items.length) {
    return <div className={styles.empty}>{emptyText}</div>;
  }

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={keyExtractor(item)} className={styles.item}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
