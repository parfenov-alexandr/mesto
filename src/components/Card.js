export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._alt = data.alt;
    this._id = data.id;
    this._userId = data.userId
    this._ownerId = data.ownerId
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick
  }

  _unfillLike = () => {
    this._likeButton.classList.remove('element__vector_active');
  }

  _fillLike = () => {
    this._likeButton.classList.add('element__vector_active');
  }
  deleteElement = () => {
    this._element.remove();
    this._element = null;
  }
  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);
    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._element.querySelector('.element__like-count');
    likeCountElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._fillLike()
    } else {
      this._unfillLike()
    }
  }
  _setEventListeners = () => {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._id)
    });
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name)
    });
  }
  _fillCardData = () => {
    this._elementImage.src = this._link;
    this._elementTitle.textContent = this._name;
    this._elementImage.alt = 'Фотография с изображением ' + this._name;
  }
  createElement = () => {
    this._element = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__vector');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._fillCardData();
    this._setEventListeners();
    this.setLikes(this._likes);
    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    }
    console.log(this._ownerId)
    return this._element;
  }
}
