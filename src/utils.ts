import { ActionToken } from './types';

function* getToken() {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh')
  const tokenLocal: ActionToken = {
    token: accessToken
  }
  const tokenRefresh: ActionToken = {
    refresh: refreshToken
  }
  const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tokenLocal)
  })
  if (response.status === 200) {
    return accessToken
  } else {
    const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tokenRefresh)
    })
    const data: {access: string} = yield response.json()
    localStorage.setItem('access', data.access)
    return data.access
  }
}

export {getToken}