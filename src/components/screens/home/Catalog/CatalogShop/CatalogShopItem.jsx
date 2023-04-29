import { Link, useNavigate } from 'react-router-dom'
import styles from './CatalogShop.module.scss'

export const CatalogShopItem = ({product}) => {
  const nav = useNavigate()
  const nameOfLink = product.name.replaceAll('/', '_')

  return (
    <Link to={`/product/${nameOfLink}`} state={{product: product}} className={styles.item}>
      <div className={styles.image}>
        <img src={product.image_url} alt={product.name} width={60} height={40}/>
      </div>
      <div className={styles.name}>
        <div className={styles.title}>{product.name}</div>
        <div className={styles.category}>{product.category}</div>
      </div>
      <div className={styles.stat}>{product.views}</div>
      <div className={styles.stat}>{product.start_date}</div>
      <div className={styles.stat}>{product.end_date}</div>
    </Link>
  )
}