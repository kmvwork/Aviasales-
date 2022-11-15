import Tab from "../tab";
import styles from './tabPanel.module.scss'
import {nanoid} from "nanoid";
import TicketList from "../ticketList";
import Button from "../button";

const TabPanel = ({...props}) => {
  const TabPanelItems = [
    {name: 'Самый дешевый'},
    {name: 'Самый быстрый'},
    {name: 'Оптимальный'},
  ]

  return (
    <>
      <div className={styles.container + ' ' + props.className}>
        <ul className={styles.ul}>
          {
            TabPanelItems.map(item => {
              return (
                <Tab label={item.name} key={nanoid()}/>
              )
            })
          }
        </ul>
        <div>
          <TicketList/>
        </div>
        <Button label='Показать еще 5 билетов!'/>
      </div>
    </>
  )
}

export default TabPanel