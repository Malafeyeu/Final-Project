import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks, setSelect } from "../../redux/action-creators";
import { IStoreState } from "../../types";
import { BookRow } from "./BookRow";
import '../../styles/books.scss'
import { functionForRow } from "../../functionForRow";

const Books = () => {
  const books = useSelector((state: IStoreState) => state.books.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks(books))
  },[])
  return (
    <section className="section-w-books">
      <h1 className="section-w-books__title">New Releases books</h1>
      {functionForRow(books).map((el: any) => 
        <BookRow 
          key={el.reduce((prev: string, cur: any) => prev+ '.' + cur.isbn13, '')} 
          books={el} 
        />
      )}
    </section>
  );
}

export { Books }