type Props = {
  footerClassName?: string
  textClassName?: string
}

function LayoutFooter({ footerClassName, textClassName }: Props) {
  return (
    <footer className={footerClassName}>
      <p className={textClassName}>Домашнее задание</p>
    </footer>
  )
}

export default LayoutFooter