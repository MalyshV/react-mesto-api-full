class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkToken = (headers) => {
    const token = localStorage.getItem('jwt');

    if (token) {
      headers['authorization'] = `Bearer ${token}`;
    }
    return headers;
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._checkToken(this._headers)
  })
    .then((res) => this._checkResponse(res));
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._checkToken(this._headers),
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    .then((res) => this._checkResponse(res));
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._checkToken(this._headers),
      credentials: 'include',
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: this._checkToken(this._headers),
    })
    .then((res) => this._checkResponse(res));
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._checkToken(this._headers),
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
        owner: data.owner,
      })
    })
    .then((res) => this._checkResponse(res));
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._checkToken(this._headers)
    })
    .then((res) => this._checkResponse(res));
  }

  setlike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      credentials: 'include',
      headers: this._checkToken(this._headers)
    })
    .then((res) => this._checkResponse(res));
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._checkToken(this._headers)
    })
    .then((res) => this._checkResponse(res));
  }

  changeLikeCardStatus(cardId, isLiked) {
    if(isLiked) {
      return this.setlike(cardId)
    } else {
      return this.removeLike(cardId)
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  // baseUrl: 'http://localhost:3001',
  // baseUrl: 'http://express.mesto.nomoredomains.icu',
  baseUrl: 'http://api.express.mesto.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;

// мой старый токен: 61426457-aa06-4805-b055-d8aeddd40fb8
// идентификатор группы: cohort-25
