import styles from './PostLengthFilter.module.css'

export function PostLengthFilter({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className={styles['filter-container']}>
      <label className={styles['filter-label']}>
        Минимальная длина заголовка:
        <input
          className={styles['filter-input']}
          type="number"
          value={value}
          min={0}
          onChange={e => onChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
