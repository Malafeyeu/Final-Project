import { useSelector } from "react-redux"
import { IStoreState } from "../../types"
import '../../styles/selectedBook.scss'


const TableWithInfoBook = () => {
  const selectedBook = useSelector((state: IStoreState) => state.books.selectedBook)
  return (
    <table className="container-table">
      <tbody>
        <tr>
          <td>Price</td>
          <td className="color-1">
            <b>{selectedBook?.price === "$0.00" ? 'Free' : selectedBook?.price}</b>
          </td>
        </tr>
        <tr>
          <td>Rating</td>
          <td></td>
        </tr>
        <tr>
          <td>Author</td>
          <td>
            <b>{selectedBook?.authors}</b>
          </td>
        </tr>
        <tr>
          <td>Publisher</td>
          <td>
            <b>{selectedBook?.publisher}</b>
          </td>
        </tr>
        <tr>
          <td>Published</td>
          <td>
            <b>
              <a href="">{selectedBook?.year}</a>
            </b>
          </td>
        </tr>
        <tr>
          <td>Pages</td>
          <td>
            <b>{selectedBook?.pages}</b>
          </td>
        </tr>
        <tr>
          <td>Language</td>
          <td>
            <b>{selectedBook?.language}</b>
          </td>
        </tr>
        <tr>
          <td>Format</td>
          <td>
            <b>eBook</b>
          </td>
        </tr>
        <tr>
          <td>ISBN-10</td>
          <td>
            <b>{selectedBook?.isbn10}</b>
          </td>
        </tr>
        <tr>
          <td>ISBN-13</td>
          <td>
            <b>{selectedBook?.isbn13}</b>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export { TableWithInfoBook }