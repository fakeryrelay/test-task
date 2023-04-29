import styles from './CatalogNav.module.scss'
import { SortButton } from './../../../../UI/SortButton/SortButton';

import { sortFunctions } from './../../../../../utils/catalogSort';
import { useSelector } from 'react-redux';
import { catalogLocale } from './../catalog.locale';

export const CatalogSort = ({activeSortFunc, setActiveSortFunc}) => {
  const language = useSelector(state => state.view.language)
  
  return (
    <div className={styles.sort}>
      <ul >
        <li>
          <h3>{catalogLocale[language].sortTitle}</h3>
        </li>
        <li>
          <SortButton
            sortFunc={sortFunctions.sortByName}
          >
            {catalogLocale[language].sortByName}
          </SortButton>
        </li>
        <li>
          <SortButton
            sortFunc={sortFunctions.sortByViews}
          >
            {catalogLocale[language].sortByViews}
          </SortButton>
        </li>
        <li>
          <SortButton
            sortFunc={sortFunctions.sortByStartDate}
          >
            {catalogLocale[language].sortByStartDate}
          </SortButton>
        </li>
        <li>
          <SortButton
            sortFunc={sortFunctions.sortByEndDate}
          >
            {catalogLocale[language].sortByEndDate}
          </SortButton>
        </li>
      </ul>
    </div>
  )
}