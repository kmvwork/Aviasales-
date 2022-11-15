import styles from './tab.module.scss'

const Tab = ({label, ...props}) => {
  return (
    <li className={styles.li} {...props}>
      <span className={styles.span}>{label}</span>
    </li>
  )
}

export default Tab