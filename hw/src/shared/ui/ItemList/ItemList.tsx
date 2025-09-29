import React, { ReactNode, Fragment } from 'react';
import styles from './ItemList.module.css';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
  emptyText?: string;
  listClassName?: string;
  itemClassName?: string;
  wrapItem?: boolean; // if false, render items without wrapper div (useful for grids)
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  emptyText = 'Список пуст',
  listClassName,
  itemClassName,
  wrapItem = true,
}: ItemListProps<T>) {
  if (!items.length) {
    return <div className={styles.empty}>{emptyText}</div>;
  }

  return (
    <div className={listClassName ?? styles.list}>
      {items.map((item) => {
        const key = keyExtractor(item);
        const content = renderItem(item);
        if (!wrapItem) {
          return <Fragment key={key}>{content}</Fragment>;
        }
        return (
          <div key={key} className={itemClassName ?? styles.item}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
