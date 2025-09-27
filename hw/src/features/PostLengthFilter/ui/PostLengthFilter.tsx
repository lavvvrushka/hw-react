import styles from './PostLengthFilter.module.css';

interface PostLengthFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export function PostLengthFilter({ value, onChange }: PostLengthFilterProps) {
  return (
    <div className={styles.container}>
      <input
        type="number"
        value={value}
        min={0}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.input}
        placeholder="Укажите длину"
      />
    </div>
  );
}
