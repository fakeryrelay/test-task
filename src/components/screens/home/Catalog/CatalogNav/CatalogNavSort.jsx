import { CatalogSort } from './CatalogSort';
import { CatalogSearch } from './CatalogSearch';

import styles from './CatalogNav.module.scss'

export const CatalogNavSort = ({searchValue, setSearchValue, activeSortFunc, setActiveSortFunc}) => {

  return (
    <div className={styles.wrapper}>
      <CatalogSort activeSortFunc={activeSortFunc} setActiveSortFunc={setActiveSortFunc}/>

      <CatalogSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
  )
}