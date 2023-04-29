import styles from './Layout.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Select } from './../UI/Select/Select';

export const Layout = ({children, backgroundColor = '#fff'}) => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.view.language)
  console.log(language)
  const selectOptions = ['ru', 'en']
  const handleChange = e => dispatch({type: 'SELECT_LANGUAGE', value: e.target.value})

  return (
    <div className={styles.page} style={{backgroundColor: backgroundColor}}>
      <div className={styles.wrapper}>
        <div className={styles.select}>
          <Select selectOptions={selectOptions} handleChange={handleChange} defaultValue={language}/>
        </div>
        
        {children}
      </div>
    </div>
  )
}