import {useState} from 'react'
import styles from './checkbox.module.scss'

const Checkbox = ({label, checked, ...props}) => {
  const defaultChecked = checked ? checked : false
  const [isChecked, setIsChecked] = useState(defaultChecked)

  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox"
             checked={isChecked}
             className={isChecked ? styles.checked : "" + styles.input}
             onChange={() => setIsChecked(prev => !prev)}
             {...props}
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default Checkbox