import styles from './logo.module.scss'

import LogoImg from '../../img/logo.svg'

const Logo = ({alt = 'logo', ...props}) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={LogoImg} alt={alt} {...props}/>
    </div>
  )
}

export default Logo