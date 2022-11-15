import styles from './button.module.scss'

const Button = ({label, props}) => {
  return (
    <button className={styles.btn + ' ' + styles.btnBig} {...props}>{label}</button>
  )
}

export default Button