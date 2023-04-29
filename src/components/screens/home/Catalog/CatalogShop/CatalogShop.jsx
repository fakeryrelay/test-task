import styles from './CatalogShop.module.scss'

import { CatalogShopHeader } from './CatalogShopHeader'
import { CatalogShopItem } from './CatalogShopItem'

export const CatalogShop = ({products = []}) => {

  return (
    <div className={styles.wrapper}>
      <CatalogShopHeader />

      {products.map(product => (
        <CatalogShopItem key={product.name} product={product}/>
      ))}
    </div>
  )
}