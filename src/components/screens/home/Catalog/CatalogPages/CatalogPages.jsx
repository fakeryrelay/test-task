import styles from './CatalogPages.module.scss'

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PagesContainer } from '../../../../UI/PagesContainer/PagesContainer';

export const CatalogPages = ({setProductsToShow, page, setPage}) => {

// #TODO: Реализовать нормальную навигацию по страницам с отключением кнопок, изменением центральных

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <PagesContainer>
          <button disabled={page <= 0} onClick={() => setPage(prev => prev - 1)}><FaChevronLeft /></button>
        </PagesContainer>

        <PagesContainer>
          <button>1</button>
        </PagesContainer>
        <PagesContainer>
          <button>2</button>
        </PagesContainer>
        <PagesContainer>
          <button>3</button>
        </PagesContainer>

        <PagesContainer>
          <button onClick={() => setPage(prev => prev + 1)}><FaChevronRight /></button>
        </PagesContainer>
      </div>

      <div className={styles.select__wrapper}>
        <select name="amountOfProductsToShow" onChange={e => setProductsToShow(+e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}