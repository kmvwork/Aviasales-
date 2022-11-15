import styles from './ticket.module.scss'
import s7 from '../../img/s7.svg'

const Ticket = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <span className={styles.price}>13400 P</span>
        <img src={s7} alt="airline"/>
      </header>
      <main>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.subtitle}>MOW – HKT</span>
            <span className={styles.content}>10:45 – 08:00</span>
          </div>
          <div className={styles.column}>
            <span className={styles.subtitle}>В пути</span>
            <span className={styles.content}>21ч 15м</span>
          </div>
          <div className={styles.column}>
            <span className={styles.subtitle}>2 пересадки</span>
            <span className={styles.content}>HKG, JNB</span>
          </div>
        </div>
      </main>
    </article>
  )
}

export default Ticket