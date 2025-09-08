type Props = {
  headerClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

function LayoutHeader({ headerClassName, titleClassName, subtitleClassName }: Props) {
  return (
    <header className={headerClassName}>
      <h1 className={titleClassName}>HomeWork</h1>
      <p className={subtitleClassName}>React + TypeScript</p>
    </header>
  )
}

export default LayoutHeader