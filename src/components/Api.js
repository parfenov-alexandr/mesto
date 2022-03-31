class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
  editProfile(name, about) {                                                       //проверить
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }

  editAvatar(avatar) {                                                       //проверить
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
      .catch(console.log)
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: '48cc0b45-e42b-4c5c-b541-675efa4f46b4',
    'Content-Type': 'application/json'
  }
});
