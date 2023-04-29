import styles from './Layout.module.scss'

export const Layout = ({children, backgroundColor = '#fff'}) => (
  <div className={styles.page} style={{backgroundColor: backgroundColor}}>
    <div className={styles.wrapper}>
      {children}
    </div>
  </div>
)