
interface IStoreState {
  user: IUserState,
  books: IBooksState,
  ui: IUiState,
}

interface IUserState {
  user: IUserDataBase | null
}

interface IUiState {
  activeTab: string
}

interface IBooksState {
  books: IBooksInfo[];
  selectedBook: IBooksInfo | null;
  search: string;
  searchResult: ISearchResultResponse[];
  limit: number;
  total: number;
  currentPage: number;
  basket: string[];
  basketLoaded: IBooksInfo[];
}

interface IUserDataBase {
  username: string,
  id: number,
  email: string,
}

interface IKeyAccess {
  access: string,
  refresh: string
}

interface IVeryfiToken {
  token: string | null;
}

interface IRefreshToken {
  refresh: string | null;
}

interface ISignUpActivation {
  uid: string,
  token: string
}

interface ISignUp{
  username: string,
  email: string,
  password: string
}

interface ISignUpConfirmation {
  text?: any;
  email?: string;
}

interface ISignIn {
  email: string,
  password: string,
}

interface IConfirmed {
  callback?: () => {};
  text?: string;
}

type ActionToken = IVeryfiToken | IRefreshToken;

interface ISearchBooksResponse {
  page: string;
  books: ISearchBooksInfo[]
}

interface IBooksResponse {
  books: IBooksInfo[];
  total?: number;
}

interface INewBooksResponse {
  total: string;
  books: INewBooksInfo[]
}

interface ISearchResultResponse {
  error: string;
  total: string;
  page: string;
  books: ISearchBooksInfo[]
}

interface INewBooksInfo {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface ISearchBooksInfo {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface IBooksInfo {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  pdf?: string;
}

interface IBook {
  bookInfo: IBooksInfo;
}

interface IStyle {
  [key: string]: string | number
};

interface ITab {
  id?: string;
  onClick?: () => void;
  text?: string;
  isActive: boolean;
  style?: IStyle;
}

enum Tabs {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED'
}

export {
  Tabs,
  type ISearchResultResponse,
  type IUserDataBase,
  type IUserState,
  type IKeyAccess,
  type ActionToken,
  type ISignUp,
  type ISignUpActivation,
  type ISignIn,
  type ISignUpConfirmation,
  type IConfirmed,
  type IStoreState,
  type IBooksInfo,
  type INewBooksInfo,
  type ISearchBooksInfo,
  type ISearchBooksResponse,
  type IBooksState,
  type IBooksResponse,
  type INewBooksResponse,
  type IBook,
  type ITab,
  type IUiState
}