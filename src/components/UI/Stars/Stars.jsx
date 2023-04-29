import { FaStar, FaRegStar } from "react-icons/fa"
import styles from './Stars.module.scss'

export const Stars = ({stars}) => {
  return (
    <div className={styles.wrapper}>
      {
        Array(5).fill('').map((_, i) => i < stars ? <FaStar key={i}/> : <FaRegStar key={i}/>)
      }
    </div>
  )
}