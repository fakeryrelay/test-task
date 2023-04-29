import styles from './SortButton.module.scss'
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';


export const SortButton = ({children, sortFunc}) => {
  const dispatch = useDispatch()
  const activeSortFunc = useSelector(state => state.catalog.sortMethod)
  const isActive = sortFunc === activeSortFunc.sortBy

  return (
    <button 
      className={styles.button}
      onClick={() => dispatch({type: 'SORT_METHOD', func: sortFunc})}
    >
      {children}
      {isActive && (activeSortFunc.toBottom ? <FaSortAmountDownAlt /> : <FaSortAmountUp />)}
    </button>
  )
}