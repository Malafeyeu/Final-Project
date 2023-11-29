import { IBooksInfo, IBooksState, ISearchResultResponse } from "../../types"
import {
  SET_BOOKS,
  SET_LIMIT,
  SET_TOTAL,
  SET_CURRENT_PAGE,
  SET_SEARCH_RESULTS,
  SET_SELECTED_BOOK, 
  SET_SEARCH,
  SET_BOOK_IN_BASKET,
  REMOVE_BOOK,
  LOAD_BOOKS_IN_BASKET,
} from "../action-types"

const initialState = {
  books: [] as IBooksInfo[],
  selectedBook: null,
  search: '',
  searchResult: [] as ISearchResultResponse[],
  currentPage: 1,
  basket: [] as string[],
  basketLoaded: [] as IBooksInfo[],
}

const cacheState = () => {
  const bookInfo = localStorage.getItem('book');
  return bookInfo ? JSON.parse(bookInfo) : initialState;
}

export default (state: IBooksState = cacheState(), action: any) => {
  switch (action.type) {
    case SET_BOOKS: {
      return ({
        ...state,
        books: action.books
      })
    }
    case SET_SELECTED_BOOK: {
      return ({
        ...state,
        selectedBook: action.book
      })
    }
    case SET_SEARCH: {
      return ({
        ...state,
        search: action.search
      })
    }
    case SET_SEARCH_RESULTS: {
      return ({
        ...state,
        searchResult: action.searchResult,
        currentPage: action.page,
        total: action.total
      })
    }
    case SET_LIMIT: {
      return ({
        ...state,
        limit: action.limit,
        currentPage: action.currPage
      })
    }
    case SET_TOTAL: {
      return ({
        ...state,
        total: action.total
      })
    }
    case SET_CURRENT_PAGE: {
      return ({
        ...state,
        currentPage: action.currPage
      })
    }
    case SET_BOOK_IN_BASKET: {
      return ({
        ...state,
        basket: Array.from(new Set([...state.basket, action.id]))
      })
    }
    case LOAD_BOOKS_IN_BASKET: {
      return ({
        ...state,
        basketLoaded: action.book
      })
    }
    case REMOVE_BOOK: {
      return ({
        ...state,
        basketLoaded: state.basketLoaded?.filter((el: any) => el?.isbn13 !== action.book),
        basket: []
      })
    }
      default: {
        return state;
      }
    } 
  }