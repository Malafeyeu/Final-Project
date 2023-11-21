import { useDispatch } from "react-redux";
import { loadBook, removeBook, setBookInBasket } from "../../../redux/action-creators";

const ElementBasket = ({books}: any) => {
  // const { image, title, authors, publisher, price, isbn13 } = books;
  const id = books?.isbn13
  const dispatch = useDispatch()
  return (
    <div className='container-book'>
      <div className='block-w-image'>
        <img src={books?.image} alt="" className="image" />
      </div>
      <div className="block-w-info">
        <h3 className="block-w-info__title">{books?.title}</h3>
        <h5 className="block-w-info__authors">by: {books?.authors}</h5>
        <h5 className="block-w-info__published">Publisher: {books?.publisher}</h5>
        <h5 className="block-w-info__price">price: {books?.price}</h5>
      </div>
      <button
        className='btn-delete-book'
        onClick={() => {
          return dispatch(removeBook(id)),
          localStorage.removeItem(`${books?.isbn13}`)
        }}
      > Remove Book </button>
    </div>
  )
}

export { ElementBasket }