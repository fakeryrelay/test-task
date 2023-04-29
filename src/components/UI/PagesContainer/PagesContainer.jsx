import styles from './PagesContainer.module.scss'

export const PagesContainer = ({children}) => (
  <div className={styles.wrapper}>{children}</div>
)