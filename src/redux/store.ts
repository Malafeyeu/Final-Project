import { combineReducers, createStore, applyMiddleware } from "redux";
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { watcherBooks, watcherUser } from "./action-creators";
import user_reducer from "./reducers/user_reducer";
import books_reducer from "./reducers/books_reducer";
import ui_reducer from "./reducers/ui_reducer";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherBooks(),
    watcherUser()
  ])
}

const store = createStore(combineReducers({
  books: books_reducer,
  ui: ui_reducer,
  user: user_reducer,
}), applyMiddleware(sagaMiddleware))

const handleChange = () => {
  const currentValue = store.getState()
  localStorage.setItem('book', `${JSON.stringify(currentValue.books)}`);
  localStorage.setItem('ui', `${JSON.stringify(currentValue.ui)}`);
  localStorage.setItem('user', `${JSON.stringify(currentValue.user)}`);
}

store.subscribe(handleChange)

sagaMiddleware.run(rootSaga);

export { store }