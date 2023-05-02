import { Layout } from "../../layout/Layout"
import { NewPriceItem } from "../../UI/NewPriceItem/NewPriceItem"
import { OldPriceItem } from "../../UI/OldPriceItem/OldPriceItem"
import { Stars } from "../../UI/Stars/Stars"
import styles from './Product.module.scss'
import { FaAngleLeft } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Product = () => {
  const language = useSelector(state => state.view.language)
  const nav = useNavigate()
  const location = useLocation();
  const product = location.state?.product
  
  return (
    <Layout backgroundColor="#EDF2F8">
      <div className={styles.wrapper}>
        <button className={styles.goBackLink} onClick={() => nav('/')}>
          <FaAngleLeft /> <span>{language === 'ru' ? 'Назад' : 'Back'}</span>
        </button>

        <div className={styles.content}>
          <div className={styles.header}>

            {+product.discount > 0 &&
              <div className={styles.discount}>
                -{product.discount}%
                <img src="/images/triangle.svg" alt="" draggable={false}/>
              </div>
            }
            
            <img className={styles.logo} src={product.logo_url}/>
          </div>

          <div className={styles.product}>
            <div className={styles.product__img}>
              <img src={product.image_url} alt="" draggable={false}/>
            </div>

            <div className={styles.info}>
              <h2>{product.name}</h2>

              <div className={styles.price}>
                {+product.discount > 0 
                  ?
                    <>
                      <div className={styles.price__item}>
                        <OldPriceItem price={product.old_price} />
                      </div>
                      <div className={styles.new__price}>
                        <Stars stars={product.stars}/>
                        <NewPriceItem price={product.new_price} />
                      </div>
                    </>
                  :
                  <div className={styles.new__price}>
                    <Stars stars={product.stars}/>
                    <NewPriceItem price={product.old_price} />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        {product.disclaimer && 
          <div className={styles.footer}>
            <p>{product.disclaimer}</p>
          </div>
        }

        
      </div>
    </Layout>
  )
}