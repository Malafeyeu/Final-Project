import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import { setCurrentPage } from "../../redux/action-creators";
import '../../styles/pagination.scss'

const Pagination = () => {
  const curPage = useSelector( (state: IStoreState) => state.books.currentPage)
  const total = useSelector( (state: IStoreState) => state.books.total)
  const limit = useSelector( (state: IStoreState) => state.books.limit)
  const dispatch = useDispatch();
  console.log(Math.round(total/limit))
  return (
    <div className='container-pagination'>
      <div className='block-flex'>
        <div 
          className={curPage == 1 ? 'left-block-disabled' : 'left-block'}
          onClick={() => 
            dispatch(setCurrentPage(curPage != 1 ? curPage - 1 : curPage))
          }
        >
          <svg 
            className={curPage == 1 ? `icon-disabled` : `icon`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
          <span className={curPage == 1 ? 'nav-disabled' : `nav`}>Prev</span>
        </div>
        <div className='middle-block'>
          <p>{curPage} page</p>
        </div>
        <div 
          className={curPage == Math.round(total/limit) ? 'right-block-disabled' : 'right-block'}
          onClick={() => 
            dispatch(setCurrentPage(curPage != Math.round(total/limit) 
            ? +curPage + 1 : curPage))
          }
        >
          <span className={curPage == Math.round(total/limit) ? 'nav-disabled' : `nav`}>Next</span>
          <svg 
            className={curPage == Math.round(total/limit) ? 'icon-disabled' : `icon`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export { Pagination }