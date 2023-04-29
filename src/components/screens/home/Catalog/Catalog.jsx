import styles from './Catalog.module.scss'
import { CatalogNavSort } from './CatalogNav/CatalogNavSort'
import { CatalogShop } from './CatalogShop/CatalogShop';
import { useEffect, useState } from 'react';
import { CatalogView } from './CatalogView/CatalogView';
import { sortByName } from './../../../../utils/catalogSort';
import { filterBySearch } from './../../../../utils/filterBySearch';



const setShownItems = (products, amount, page, toBottom) => {
  const items = toBottom ? products : products.reverse()
  const result = items.filter((_, i) => i >= 0 + amount * page && i < amount + amount * page)

  return result
}

export const Catalog = ({}) => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [amountProductsToShow, setAmountProductsToShow] = useState(5)
  const [activeSortFunc, setActiveSortFunc] = useState({
    sortBy: sortByName,
    toBottom: true
  })

  const cardItems = async() => {
    const get = await fetch('https://files.rerotor.ru/rerotor/products.json')
    const products = await get.json()
    setProducts(products)
  }

  const filteredProducts = activeSortFunc.sortBy(filterBySearch(products, searchValue), searchValue)
  const productsToShow = setShownItems(filteredProducts, amountProductsToShow, page, activeSortFunc.toBottom)

  useEffect(() => {
    cardItems()
  }, [])

  return (
    <div>
      <h1 className={styles.title}>Каталог товаров</h1>

      <CatalogNavSort 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        activeSortFunc={activeSortFunc} 
        setActiveSortFunc={setActiveSortFunc}
      />

      <CatalogView
        setAmountProductsToShow={setAmountProductsToShow} 
        page={page} 
        setPage={setPage}
        maxPageNum={Math.ceil(filteredProducts.length / amountProductsToShow)}
      />

      <CatalogShop 
      products={productsToShow}
      />
    </div>
  )
}