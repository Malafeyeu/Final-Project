import { FoundBook } from "./FoundBook"

const SearchRow = ({books}: {books: any[]}) => {
  return (
    <div className="container-searchDataRow">
      { books && books.length === 1 ?
        <>
          <FoundBook bookInfo={books[0]}/>
        </> :
        books && books.length === 2 ?
        <>
          <FoundBook bookInfo={books[0]}/>
          <FoundBook bookInfo={books[1]}/>
        </> :
        books && books.length === 3 ?
        <>
          <FoundBook bookInfo={books[0]}/>
          <FoundBook bookInfo={books[1]}/>
          <FoundBook bookInfo={books[2]}/>
        </> :
        books && books.length === 4 ?
        <>
          <FoundBook bookInfo={books[0]}/>
          <FoundBook bookInfo={books[1]}/>
          <FoundBook bookInfo={books[2]}/>
          <FoundBook bookInfo={books[3]}/>
        </> : ''
      }
    </div>
  )
}

export { SearchRow }