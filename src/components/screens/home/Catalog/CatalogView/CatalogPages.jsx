import styles from './CatalogView.module.scss'
import { PagesContainer } from './../../../../UI/PagesContainer/PagesContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cn from 'clsx'
import { Fragment } from 'react';


export const CatalogPages = ({page, setPage, maxPageNum}) => {
  console.log(maxPageNum)

  return (
    <div className={styles.nav}>
      <PagesContainer>
        <button disabled={page <= 0} onClick={() => setPage(prev => prev - 1)}><FaChevronLeft /></button>
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
                      onClick={() => setPage(i)}
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
                        onClick={() => setPage(prev => prev + i - 1)}
                      >{page+i}</button>
                    </PagesContainer>
                  }
                </Fragment>

            ))}
          </>
      }



      <PagesContainer>
        <button disabled={page + 1 >= maxPageNum} onClick={() => setPage(prev => prev + 1)}><FaChevronRight /></button>
      </PagesContainer>
    </div>
  )
}