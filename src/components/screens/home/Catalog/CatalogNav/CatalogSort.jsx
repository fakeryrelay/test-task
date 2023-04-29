import styles from './CatalogNav.module.scss'
import { SortButton } from './../../../../UI/SortButton/SortButton';

const sortByName = (products = []) => {
  return products.sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()

    for (let i = 0; i < nameA.length; i++) {
      if (nameA[i] !== nameB[i]) {
        if (nameA > nameB) return 1
        return -1
      }
      continue
    }

    return 0
  })
}

const sortByViews = (products = []) => {
  return products.sort((a, b) => b.views - a.views)
}

const sortByStartDate = (products = []) => {
  return products.sort((a, b) => {
    const dateA = new Date(a?.start_date)
    const dateB = new Date(b?.start_date)

    return dateA.getTime() - dateB.getTime()
  })
}

const sortByEndDate = (products = []) => {
  return products.sort((a, b) => {
    const dateA = new Date(a?.end_date)
    const dateB = new Date(b?.end_date)

    return dateA.getTime() - dateB.getTime()
  })
}

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