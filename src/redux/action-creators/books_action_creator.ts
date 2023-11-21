import { put, takeEvery } from "redux-saga/effects";
import { IBooksInfo, 
  IBooksResponse, 
  ISearchBooksInfo, 
  ISearchResultResponse 
} from "../../types";
import { 
  LOAD_BOOK, 
  LOAD_BOOKS, 
  LOAD_BOOKS_IN_BASKET, 
  LOAD_SEARCH, 
  REMOVE_BOOK, 
  SET_BOOKS, 
  SET_BOOK_IN_BASKET, 
  SET_CURRENT_PAGE, 
  SET_LIMIT, SET_SEARCH, 
  SET_SEARCH_RESULTS, 
  SET_SELECTED_BOOK, 
  SET_TOTAL 
} from "../action-types";

const loadBooks = ( payload: any ) => ({
  type: LOAD_BOOKS,
  payload
})

const setBooks = (books: IBooksInfo[]) => ({
  type: SET_BOOKS,
  books
})

const setSearch = (search: string) => ({
  type: SET_SEARCH,
  search
})

const loadSearch = (payload: any | IBooksInfo[]) => ({
  type: LOAD_SEARCH,
  payload
})

const setSearchResult = (searchResult: ISearchBooksInfo[], page: string, total: string) => ({
  type: SET_SEARCH_RESULTS,
  searchResult,
  page,
  total
})

const setSelectedBook = (book: IBooksInfo) => ({
  type: SET_SELECTED_BOOK,
  book
})

const loadBook = (id: number | string | null | string[]) => ({
  type: LOAD_BOOK,
  id
})

const setSelect = (limit: number, currPage: number) => ({
  type: SET_LIMIT,
  limit,
  currPage
})

const setTotal = (total: number) => ({
  type: SET_TOTAL,
  total
})

const setCurrentPage = (currPage: number) => ({
  type: SET_CURRENT_PAGE,
  currPage
})

const setBookInBasket = (book: IBooksInfo | null) => ({
  type: SET_BOOK_IN_BASKET,
  book
})

const removeBook = (book: any) => ({
  type: REMOVE_BOOK,
  book
})

function* fetchNewBooks() {
  const response: Response = yield fetch(`https://api.itbook.store/1.0/new`)
  const data: IBooksResponse = yield response.json();
  yield put(setBooks(data.books))
}

function* fetchLoadBook(action: any) {
  if(Array.isArray(action.id)) {
    let requests = (action.id).map((el: any) => fetch(`https://api.itbook.store/1.0/books/${el}`))
    const responses: any[] = yield Promise.all(requests);
    const books: IBooksInfo = yield Promise.all(responses.map(response => response.json()))
    yield put(setBookInBasket(books));
  } else {
    const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${action.id}`);
    const book: IBooksInfo = yield response.json();  
    yield put(setSelectedBook(book))
  }
}

function* fetchSearchBook(action: any) {
  const js = JSON.stringify(action.payload.search)
  const response: Response = yield fetch(`https://api.itbook.store/1.0/search/${js}
  /?page=${action.payload.currentPage}`);
  const data: ISearchResultResponse = yield response.json();
  yield put(setSearchResult(data.books, data.page, data.total))
}

function* watcherBooks() {
  yield takeEvery(LOAD_BOOKS, fetchNewBooks)
  yield takeEvery(LOAD_BOOK, fetchLoadBook)
  yield takeEvery(LOAD_SEARCH, fetchSearchBook)
}

export {
  watcherBooks,
  loadBooks,
  setSearch,
  loadBook,
  setSelect,
  setTotal,
  setCurrentPage,
  loadSearch,
  setBookInBasket,
  removeBook
}