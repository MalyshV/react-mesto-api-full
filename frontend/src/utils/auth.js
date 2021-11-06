// export const BASE_URL = 'http://localhost:3001';
// export const BASE_URL = 'http://express.mesto.nomoredomains.icu';

export const BASE_URL = 'http://api.express.mesto.nomoredomains.icu';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
  .then((res) => checkResponse(res));
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
  .then((res) => checkResponse(res));
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
  })
  .then((res) => checkResponse(res));
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}