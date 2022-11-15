import Filter from './components/filter'
import Logo from "./components/logo"
import TabPanel from "./components/tabPanel";
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo/>
      </header>
      <main className={styles.main}>
        <Filter
          className={styles.filter}
          title='Количество пересадок'
        />
        <TabPanel
          className={styles.tabPanel}
        />
      </main>
    </div>
  )
}

export default App
