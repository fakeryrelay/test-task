import { catalogReducer } from "./catalog-reducer/catalog-reducer";
import { loadProducts } from "./catalog";
import { viewReducer } from './language-reducer/view-reducer';
import { setFilterMiddleware } from './../middleware/setFilterMiddleware.middleware';
import { setLanguageMiddleware } from './../middleware/setLanguageMiddleware.middlewate';

const {
  legacy_createStore: createStore, combineReducers, applyMiddleware
} = require("redux");

const thunkMiddleware = storeApi => next => action => {
  if (typeof action === "function") {
    action(storeApi.dispatch, storeApi.getState)
    return
  }
  next(action)
}

const rootReducer = combineReducers({
  catalog: catalogReducer,
  view: viewReducer
})

export const store = createStore(rootReducer, applyMiddleware(setLanguageMiddleware, setFilterMiddleware ,thunkMiddleware))

store.dispatch(loadProducts())
if (sessionStorage.getItem('filterOptions')) {
  const data = sessionStorage.getItem('filterOptions')
  const filterOptions = JSON.parse(data)
  console.log(filterOptions)
  store.dispatch({type: 'RELOAD_FILTER_STATE', ...filterOptions})
}

if (localStorage.getItem('language')) {
  store.dispatch({type: 'SELECT_LANGUAGE', value: localStorage.getItem('language')})
}