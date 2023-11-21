import { IKeyAccess, ISignUp, ISignUpActivation, ISignIn, IUserDataBase } from '../../types';
import { getToken } from '../../utils';
import { ACTIVATION_SIGN_UP, GET_USER_DATA, SIGN_UP, SET_USER, SIGN_IN } from '../action-types';
import { takeEvery, put } from 'redux-saga/effects'

const activateSignUp = (activationInfo: ISignUpActivation) => ({
  type: ACTIVATION_SIGN_UP,
  activationInfo
})

const signUp = (user: ISignUp) => ({
  type: SIGN_UP,
  user
})

const signIn = (actionSignIn: ISignIn) => ({
  type: SIGN_IN,
  actionSignIn
})

const userData = () => ({
  type: GET_USER_DATA
})

const setUser = (userInfo: IUserDataBase | null) => ({
  type: SET_USER,
  userInfo
})

function* fetchActivationSignUp(action: any) {
  const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.activationInfo)
  });
  if (response.status === 204) {
    window.location.pathname = '/confirmed'
  }
}

function* fetchSignUp(action: any) {
  const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.user)
  })
  if (response.status === 201) {
    window.location.pathname = '/registration'
  }
}

function* fetchUserDataBase() {
  const token: string = yield getToken();
  const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
    headers: { 
      'Authorization': `Bearer ${token}`,
    }
  });
  const data: IUserDataBase = yield response.json();
  yield put(setUser(data))
  window.location.pathname = '/'
}

function* fetchSignIn(action: any) {
  const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.actionSignIn)
  })
  const data: IKeyAccess = yield response.json();
  if (response.status === 200) {
    localStorage.setItem('access', `${data.access}`);
    localStorage.setItem('refresh', `${data.refresh}`);
    yield put(userData())
  }
}

function* watcherUser() {
  yield takeEvery(ACTIVATION_SIGN_UP, fetchActivationSignUp)
  yield takeEvery(SIGN_UP, fetchSignUp)
  yield takeEvery(SIGN_IN, fetchSignIn)
  yield takeEvery(GET_USER_DATA, fetchUserDataBase)
}

export { 
  activateSignUp, 
  signUp, 
  watcherUser,
  signIn,
  setUser
}