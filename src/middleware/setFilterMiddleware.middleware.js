const initFilterOption = {
  page: 0,
  amountOfItemsToShow: 5,
  searchValue: '',
  sortMethod: {
    sortBy: 'sortByName',
    toBottom: true
  }
}

const deepObjectCheck = (obj1, obj2) => {
  let res = true

  for (const key in obj1) {
    if (!(key in obj2)) {
      return false
    }

    if (typeof obj1[key] === 'object') {
      res = res && deepObjectCheck(obj1[key], obj2[key])
      continue
    }

    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return res
}

export const setFilterMiddleware = storeApi => next => action => {
  next(action)

  // if (action.type === 'RELOAD_FILTER_STATE')
  
  
  const actualState = storeApi.getState().catalog
  const filterOptions = {
    page: actualState.page,
    amountOfItemsToShow: actualState.amountOfItemsToShow,
    searchValue: actualState.searchValue,
    sortMethod: {
      sortBy: actualState.sortMethod.sortBy.name,
      toBottom: actualState.sortMethod.toBottom
    }
  }
  if (!deepObjectCheck(filterOptions, initFilterOption)) {
    sessionStorage.setItem('filterOptions', JSON.stringify(filterOptions))
  }
}