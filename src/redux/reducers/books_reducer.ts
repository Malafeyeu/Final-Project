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
} from "../action-types"

const initialState = {
  books: [] as IBooksInfo[],
  selectedBook: null,
  search: '',
  searchResult: [] as ISearchResultResponse[],
  limit: 10,
  total: 0,
  currentPage: 1,
  basket: [] as IBooksInfo[] | null,
}

export default (state: IBooksState = initialState, action: any) => {
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
        basket: action.book
      })
    }
    case REMOVE_BOOK: {
      return ({
        ...state,
        basket: state.basket?.filter((el: any) => el?.isbn13 !== action.book)
      })
    }
      default: {
        return state;
      }
    } 
  }