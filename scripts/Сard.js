import { bigImagePopup, bigImage, bigImageTitle, openPopup } from './index.js';

export class Card {
  constructor(link, name, templateSelector) {
    this._link = link;
    this._name = name;
    this._template = document.querySelector(templateSelector).content;
  }
  _like = (evt) => {
    evt.target.classList.toggle('element__vector_active');
  }
  _deleteElement = (evt) => {
    evt.target.closest('.element').remove();
  }
  _openBigImage = () => {
    openPopup(bigImagePopup);
    bigImage.src = this._link;
    bigImageTitle.textContent = this._name;
    bigImage.alt = 'Фотография с изображением ' + this._name;
  }
  _setEventListeners = () => {
    this._likeButton.addEventListener('click', this._like);
    this._deleteButton.addEventListener('click', this._deleteElement);
    this._elementImage.addEventListener('click', this._openBigImage);
  }
  _renderCard = () => {
    this._elementImage.src = this._link;
    this._elementTitle.textContent = this._name;
    this._elementImage.alt = 'Фотография с изображением ' + this._name;
  }
  createElement = () => {
    this._element = this._template.cloneNode(true);
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__vector');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._renderCard();
    this._setEventListeners();
    return this._element;
  }
}
