import { CatalogSort } from './CatalogSort';
import { CatalogSearch } from './CatalogSearch';

import styles from './CatalogNav.module.scss'

export const CatalogNavSort = () => {
  return (
    <div className={styles.wrapper}>
      <CatalogSort />

      <CatalogSearch />
    </div>
  )
}