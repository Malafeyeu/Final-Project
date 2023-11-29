import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadBook, loadBooksInBasket, removeBook, setBookInBasket } from "../../redux/action-creators"
import { IStoreState } from "../../types"
import { ElementBasket } from "./ElementBasket"
import { Header } from "../Header"
import '../../styles/basket.scss'

const Basket = () => {
  const books = useSelector((state: IStoreState) => state.books.basketLoaded)
  const booksId = useSelector((state: IStoreState) => state.books.basket)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadBook(booksId))
  }, [booksId])

  return (
    <>
      <Header/>
      <div className="container-basket">
        { books && books.length === 0 ? 
        <div style={{color: 'white'}}>пусто</div> :
        Array.isArray(books) && books?.map((el: any) => 
          <ElementBasket 
            key={el.isbn13} 
            books={el} 
          /> 
        )
        }
        { books && books.length !> 1 ?
        <button
          onClick={() => {
            return dispatch(loadBooksInBasket(null)),
            dispatch(removeBook(null))
          }}
        >Clear Basket</button>
        : ''
        }
      </div>
      
    </>
  )
}

export { Basket }