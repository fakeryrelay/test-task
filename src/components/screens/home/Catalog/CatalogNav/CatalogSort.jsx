import styles from './CatalogNav.module.scss'
import { SortButton } from './../../../../UI/SortButton/SortButton';

import { sortByName, sortByViews, sortByStartDate, sortByEndDate } from './../../../../../utils/catalogSort';

export const CatalogSort = ({activeSortFunc, setActiveSortFunc}) => {

  return (
    <div className={styles.sort}>
      <ul >
        <li>
          <h3>Сортировать:</h3>
        </li>
        <li>
          <SortButton
            sortFunc={sortByName}
            activeSortFunc={activeSortFunc}
            setActiveSortFunc={setActiveSortFunc}
          >
            по названию
          </SortButton>
        </li>
        <li>
          <SortButton
            sortFunc={sortByViews}
            activeSortFunc={activeSortFunc}
            setActiveSortFunc={setActiveSortFunc}
          >
            по просмотрам
          </SortButton>
        </li>
        <li>
          <SortButton
            sortFunc={sortByStartDate}
            activeSortFunc={activeSortFunc}
            setActiveSortFunc={setActiveSortFunc}
          >
            по дате начала
          </SortButton>
        </li>
        <li>
          <SortButton
            sortFunc={sortByEndDate}
            activeSortFunc={activeSortFunc}
            setActiveSortFunc={setActiveSortFunc}
          >
            по дате окончания
          </SortButton>
        </li>
      </ul>
    </div>
  )
}