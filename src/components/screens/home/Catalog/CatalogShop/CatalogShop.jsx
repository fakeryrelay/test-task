import styles from './CatalogShop.module.scss'

import { CatalogShopItem } from './CatalogShopItem'
import { catalogLocale } from './../catalog.locale';
import { useSelector } from 'react-redux';

export const CatalogShop = ({products = []}) => {
  const language = useSelector(state => state.view.language)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.image}>{catalogLocale[language].headerPhoto}</div>
        <div className={styles.name}>{catalogLocale[language].headerName}</div>
        <div className={styles.stat}>{catalogLocale[language].headerViews}</div>
        <div className={styles.stat}>{catalogLocale[language].headerStartDate}</div>
        <div className={styles.stat}>{catalogLocale[language].headerEndDate}</div>
      </div>

      {products.map(product => (
        <CatalogShopItem key={product.name} product={product}/>
      ))}
    </div>
  )
}