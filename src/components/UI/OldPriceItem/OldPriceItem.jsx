import styles from './OldPriceItem.module.scss'

export const OldPriceItem = ({price}) => {
  const [integer, remainder] = String(price).replaceAll('.', ',').split(',')

  return (
    <>
      <div className={styles.price}>
        <span className={styles.big__num}>{integer ? integer.padEnd(2, '0') : '00'}</span>
        <span className={styles.small__num}>{remainder ? remainder.padEnd(2, '0') : '00'}</span>
        <span className={styles.symbol}>₽</span>

        <div className={styles.line} />
      </div>

      <p className={styles.text}>Старая цена</p>
    </>
  )
}