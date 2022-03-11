export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._alt = data.alt;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _like = () => {
    this._likeButton.classList.toggle('element__vector_active');
  }
  _deleteElement = () => {
    this._element.remove();
    this._element = null;
  }
  _setEventListeners = () => {
    this._likeButton.addEventListener('click', this._like);
    this._deleteButton.addEventListener('click', this._deleteElement);
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
    return this._element;
  }
}
