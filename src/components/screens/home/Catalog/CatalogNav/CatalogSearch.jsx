
import { useDispatch, useSelector } from 'react-redux';
import { catalogLocale } from './../catalog.locale';

export const CatalogSearch = () => {
  const language = useSelector(state => state.view.language)

  const searchValue = useSelector(state => state.catalog.searchValue)
  const dispatch = useDispatch()

  return (
    <label>
      <input 
        type="text" 
        placeholder={catalogLocale[language].search}
        value={searchValue}
        onChange={e => dispatch({type: 'SET_SEARCH_VALUE', value: e.target.value})}
      />
    </label>
  )
}