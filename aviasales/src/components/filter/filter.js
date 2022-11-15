import Checkbox from '../checkbox'
import {nanoid} from 'nanoid'
import styles from './filter.module.scss'

const Filter = ({title, ...props}) => {
  const FilterItems = [
    {name: 'Все'},
    {name: 'Без пересадок'},
    {name: '1 пересадка'},
    {name: '2 пересадки'},
    {name: '3 пересадки'},
  ]

  return (
    <div className={styles.wrapper + ' ' + props.className}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.ul}>
        {
          FilterItems.map(item => {
            return (
              <li className={styles.li} key={nanoid()}>
                <Checkbox
                  label={item.name}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Filter