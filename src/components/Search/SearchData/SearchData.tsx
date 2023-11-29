import { useDispatch, useSelector } from "react-redux"
import { IStoreState } from "../../../types"
import { useEffect } from "react"
import { loadSearch } from "../../../redux/action-creators"
import { Row } from "../../../Row"
import { SearchRow } from "./SearchRow"
import { Pagination } from "../../Pagination"
import { useParams } from "react-router-dom"
import { Header } from "../../Header"
import { Footer } from "../../Footer"

const SearchData = () => {
  const limit = useSelector((state: IStoreState) => state.books.limit)
  const currentPage = useSelector((state: IStoreState) => state.books.currentPage)
  const searchResult: any = useSelector((state: IStoreState) => state.books.searchResult)
  const total = useSelector((state: IStoreState) => state.books.total)
  const search = useParams().id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadSearch({
      search,
      limit,
      currentPage
    }))
  }, [search, limit, currentPage])
  return (
    <>
      <Header/>
      <section className="container-searchResult">
        <h1 className="container-searchResult__title">
          {`"${search}"`} result search
        </h1>
        <p>Found {total} items</p>
        {searchResult !== undefined ? Row(searchResult).map((el: any) =>
          <SearchRow 
            key = {el.reduce((prev: string, cur: any) => prev+ '.' + cur.isbn13, '')} 
            books = {el} 
          /> )
          : ''
        }
        <Pagination/>
      </section>
      <Footer/>
    </>
  )
}

export { SearchData }