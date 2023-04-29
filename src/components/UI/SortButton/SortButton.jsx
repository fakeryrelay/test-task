import styles from './SortButton.module.scss'
import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";


export const SortButton = ({children, sortFunc, activeSortFunc, setActiveSortFunc}) => {
  const isActive = sortFunc === activeSortFunc.sortBy
  if (activeSortFunc)

  return (
    <button 
      className={styles.button}
      onClick={() => setActiveSortFunc(prevState => {
        if (prevState.sortBy === sortFunc) {
          console.log(prevState)
          return {
            ...prevState,
            toBottom: !prevState.toBottom
          }
        }
        return {
          sortBy: sortFunc,
          toBottom: true
        }
      })}
    >
      {children}
      {isActive && (activeSortFunc.toBottom ? <FaSortAmountDownAlt /> : <FaSortAmountUp />)}
    </button>
  )
}