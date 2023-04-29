import { sortFunctions } from "../../utils/catalogSort";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  productsToShow: [],
  page: 0,
  amountOfItemsToShow: 5,
  sortMethod: {
    sortBy: sortFunctions.sortByName,
    toBottom: true
  },
  searchValue: ''
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARRAY_OF_PRODUCTS': {
      return {
        ...state,
        allProducts: action.products
      }
    }
    case 'PAGE_UP': {
      return {
        ...state,
        page: state.page + 1
      }
    }
    case 'PAGE_DOWN': {
      return {
        ...state,
        page: state.page - 1
      }
    }
    case 'PAGE_BY_NUM': {
      return {
        ...state,
        page: action.page
      }
    }
    case 'AMOUNT_TO_SHOW': {
      return {
        ...state,
        amountOfItemsToShow: action.value
      }
    }
    case 'SORT_METHOD': {
      if (action.func === state.sortMethod.sortBy) {
        return {
          ...state,
          sortMethod: {
            sortBy: action.func,
            toBottom: !state.sortMethod.toBottom
          }
        }
      }
      return {
        ...state,
        sortMethod: {
          sortBy: action.func,
          toBottom: true
        }
      }
    }
    case 'SET_SEARCH_VALUE': {
      return {
        ...state,
        searchValue: action.value
      }
    }
    case 'RELOAD_FILTER_STATE': {
      return {
        ...state,
        page: action.page,
        amountOfItemsToShow: action.amountOfItemsToShow,
        sortMethod: {
          sortBy: sortFunctions[action.sortMethod.sortBy],
          toBottom: action.sortMethod.sortBy
        },
        searchValue: action.searchValue
      }
    }

    default:
      return state
  }
}