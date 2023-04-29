import styles from './Catalog.module.scss'
import { CatalogNavSort } from './CatalogNav/CatalogNavSort'
import { CatalogShop } from './CatalogShop/CatalogShop';
import { useEffect, useState } from 'react';
import { CatalogView } from './CatalogView/CatalogView';
import { filterBySearch } from './../../../../utils/filterBySearch';
import { useSelector } from 'react-redux';
import { catalogLocale } from './catalog.locale.js';



const setShownItems = (products, amount, page, toBottom) => {
  const items = toBottom ? products : products.reverse()
  const result = items.filter((_, i) => i >= 0 + amount * page && i < amount + amount * page)

  return result
}

export const Catalog = ({}) => {
  const products = useSelector(state => state.catalog.allProducts)
  const page = useSelector(state => state.catalog.page) 
  const searchValue = useSelector(state => state.catalog.searchValue) 
  const amountProductsToShow = useSelector(state => state.catalog.amountOfItemsToShow) 
  const activeSortFunc = useSelector(state => state.catalog.sortMethod)
  const language = useSelector(state => state.view.language)

  const filteredProducts = activeSortFunc.sortBy(filterBySearch(products, searchValue), searchValue)
  const productsToShow = setShownItems(filteredProducts, amountProductsToShow, page, activeSortFunc.toBottom)

  return (
    <div>
      <h1 className={styles.title}>{catalogLocale[language].catalogTitle}</h1>

      <CatalogNavSort />

      <CatalogView
        maxPageNum={Math.ceil(filteredProducts.length / amountProductsToShow)}
      />

      <CatalogShop 
      products={productsToShow}
      />
    </div>
  )
}