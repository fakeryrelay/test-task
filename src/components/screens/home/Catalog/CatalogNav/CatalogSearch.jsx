
export const CatalogSearch = ({searchValue, setSearchValue}) => {

  return (
    <label>
      <input 
        type="text" 
        placeholder="Поиск..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value.toLowerCase())}
      />
    </label>
  )
}