import styles from './CatalogView.module.scss'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PagesContainer } from '../../../../UI/PagesContainer/PagesContainer';
import { CatalogPages } from './CatalogPages';

export const CatalogView = ({setAmountProductsToShow, page, setPage, maxPageNum}) => {

// #TODO: Реализовать нормальную навигацию по страницам с отключением кнопок, изменением центральных

  return (
    <div className={styles.wrapper}>
      <CatalogPages page={page} setPage={setPage} maxPageNum={maxPageNum}/>

      <div className={styles.select__wrapper}>
        <select name="amountOfProductsToShow" onChange={e => setAmountProductsToShow(+e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}