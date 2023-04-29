import styles from './CatalogView.module.scss'
import { PagesContainer } from './../../../../UI/PagesContainer/PagesContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cn from 'clsx'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const CatalogPages = ({maxPageNum}) => {
  const page = useSelector(state => state.catalog.page)
  const dispatch = useDispatch()
  return (
    <div className={styles.nav}>
      <PagesContainer>
        <button disabled={page <= 0} onClick={() => dispatch({type: 'PAGE_DOWN'})}><FaChevronLeft /></button>
      </PagesContainer>

      {page === 0 || page === 1
        ?
          <>
            {Array(3).fill('').map((_, i) => (
              <Fragment key = {i}>
                {i < maxPageNum &&
                  <PagesContainer>
                    <button 
                      className={cn(i === page && styles.active__button)}
                      onClick={() => dispatch({type: 'PAGE_BY_NUM', page: i})}
                    >{i+1}</button>
                  </PagesContainer>
                }
              </Fragment>
            ))}
          </>
        : 
          <>
            {Array(3).fill('').map((_, i) => (
                <Fragment key = {i + page - 1}>
                  {i + page - 1 < maxPageNum &&
                    <PagesContainer>
                      <button 
                        className={cn(i === 1 && styles.active__button)}
                        onClick={() => dispatch({type: 'PAGE_BY_NUM', page: page + i - 1})}
                      >{page+i}</button>
                    </PagesContainer>
                  }
                </Fragment>

            ))}
          </>
      }



      <PagesContainer>
        <button disabled={page + 1 >= maxPageNum} onClick={() => dispatch({type: 'PAGE_UP'})}><FaChevronRight /></button>
      </PagesContainer>
    </div>
  )
}