import styles from './Select.module.scss'

export const Select = ({selectOptions, handleChange, defaultValue}) => (
  <div className={styles.select__wrapper}>
    <select name="amountOfProductsToShow" onChange={handleChange} defaultValue={defaultValue}>
      {selectOptions.map(el => <option key={`option ${el}`} value={el}>{el}</option>)}
    </select>
  </div>
)