import styles from './CatalogShop.module.scss'

export const CatalogShopHeader = () => (
  <div className={styles.header}>
    <div className={styles.image}>Фото</div>
    <div className={styles.name}>Название</div>
    <div className={styles.stat}>Просмотры</div>
    <div className={styles.stat}>Начало ротации</div>
    <div className={styles.stat}>Конец ротации</div>
  </div>
)