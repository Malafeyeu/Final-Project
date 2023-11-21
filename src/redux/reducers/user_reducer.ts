import { IUserState } from '../../types'
import { SET_USER } from '../action-types'

const initialState = {
  user: null
}

const cacheState = () => {
  const userInfo = localStorage.getItem('user');
  return userInfo ? JSON.parse(userInfo) : initialState;
}

export default (state: IUserState = cacheState(), action: any) => {
  switch (action.type) {
    case SET_USER: {
      return ({
        ...state,
        user: action.userInfo
      })
    }
    default: {
      return state
    }
  }
}