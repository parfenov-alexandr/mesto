import { closeEditButton, closeImageButton } from '../components/constants.js'

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;                            //селектор попапа
  }
  _handleEscClose = (evt) => {                                      //закрытие по escape
    if (evt.key === 'Escape') {
      this.close();
    };
  }
  open() {                                                        //открывает попап
    this._popupSelector.classList.add('popup_opened');
  }
  close() {                                                                //закрывает попап
    this._popupSelector.classList.remove('popup_opened');
  }
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose)
    closeEditButton.addEventListener('click', () => {
      this.close()
    });
    closeImageButton.addEventListener('click', () => {
      this.close()
    });
  }
  closePopupsByOverlayClick = () => {                                    //слушатель закрытия по клику
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close(evt.target);
      }
    });
  }
}

