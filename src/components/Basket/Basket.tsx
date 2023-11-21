import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadBook, setBookInBasket } from "../../redux/action-creators"
import { IStoreState } from "../../types"
import { ElementBasket } from "./ElementBasket"
import { Header } from "../Header"
import '../../styles/basket.scss'

const Basket = () => {
  const books = useSelector((state: IStoreState) => state.books.basket)
  const getBooks = () => {
    let book = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i)?.length === 13) {
        let par : any = localStorage.getItem(`${localStorage.key(i)}`)
        book.push(JSON.parse(par))
      }
    }
    return book
  }
  const bookId: any[] = getBooks()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadBook(bookId))
  }, [])

  return (
    <>
      <Header/>
      <div className="container-basket">
        {books?.map((el: any) => 
          <ElementBasket 
            key={el?.isbn13} 
            books={el} 
          /> 
        )
        }
        { books && books.length !> 1 ?
        <button
          onClick={() => { 
            dispatch(setBookInBasket(null));
            for (let item of bookId) {
              localStorage.removeItem(`${item}`)
            }
          }}
        >Clear Basket</button>
        : ''
        }
      </div>
      
    </>
  )
}

export { Basket }