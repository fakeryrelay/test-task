import styles from './CatalogView.module.scss'

import { CatalogPages } from './CatalogPages';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../../../UI/Select/Select';


export const CatalogView = ({page, setPage, maxPageNum}) => {
  const dispatch = useDispatch()
  const amountOfItemsToShow = useSelector(state => state.catalog.amountOfItemsToShow)
  
  const selectOptions = [5, 10, 20]
  const handleChange = e => dispatch({type: 'AMOUNT_TO_SHOW', value: +e.target.value})


  return (
    <div className={styles.wrapper}>
      <CatalogPages page={page} setPage={setPage} maxPageNum={maxPageNum}/>

      <Select selectOptions={selectOptions} handleChange={handleChange} defaultValue={amountOfItemsToShow}/>
    </div>
  )
}