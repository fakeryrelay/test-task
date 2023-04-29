import styles from './CatalogShop.module.scss'

import { CatalogShopItem } from './CatalogShopItem'

export const CatalogShop = ({products = []}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.image}>Фото</div>
        <div className={styles.name}>Название</div>
        <div className={styles.stat}>Просмотры</div>
        <div className={styles.stat}>Начало ротации</div>
        <div className={styles.stat}>Конец ротации</div>
      </div>

      {products.map(product => (
        <CatalogShopItem key={product.name} product={product}/>
      ))}
    </div>
  )
}