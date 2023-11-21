import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadBook, loadBooks, setBookInBasket } from "../../../redux/action-creators";
import { IStoreState } from "../../../types";
import { TableWithInfoBook } from "../../TableWithInfoBook";
import '../../../styles/selectedBook.scss'
import { ActiveTab } from "../../ActiveTab";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

const SelectedBook = () => {
  const selectedBook: any = useSelector((state: IStoreState) => state.books.selectedBook);
  const dispatch = useDispatch();
  const {id}: any = useParams()
  useEffect(() => {
    dispatch(loadBook(Number(id)))
  }, [id])
  return (
    <>
      <Header/>
      <div className="container-selectedBook">
        <div className="nav">
          <a href='/' >BookStore</a>
          {' > '}
          <b>{selectedBook?.title}</b>
        </div>
        <div className="block-w-book">
          <div className="left-block">
            <img 
              className="left-block_image"
              src={selectedBook?.image} 
              alt="book" 
            />
            <div className="left-block_btn-buy">
              <a href={selectedBook?.url}> Buy </a>
            </div>
            <button 
              className="left-block_btn-add-basket"
              onClick={() => {
                return dispatch(setBookInBasket(selectedBook)),
                localStorage.setItem(`${id}`, JSON.stringify(selectedBook?.isbn13))
              }}
            
            > Basket </button>
          </div>
          <div className="right-block">
            <TableWithInfoBook/>
            <ActiveTab/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export { SelectedBook }