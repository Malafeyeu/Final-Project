import { Book } from "../Book/Book"
import '../../../styles/books.scss'

const BookRow = ({books} : {books: any[]}) => {
  return (
    <div className="bookRow-container">
      { books && books.length === 1 ?
        <>
          <Book bookInfo={books[0]}/>
        </> :
        books && books.length === 2 ?
        <>
          <Book bookInfo={books[0]}/>
          <Book bookInfo={books[1]}/>
        </> :
        books && books.length === 3 ?
        <>
          <Book bookInfo={books[0]}/>
          <Book bookInfo={books[1]}/>
          <Book bookInfo={books[2]}/>
        </> :
        books && books.length === 4 ?
        <>
          <Book bookInfo={books[0]}/>
          <Book bookInfo={books[1]}/>
          <Book bookInfo={books[2]}/>
          <Book bookInfo={books[3]}/>
        </> : ''
      }
    </div>
  )
}

export { BookRow }