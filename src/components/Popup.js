export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;                            //селектор попапа
    this._closeButton = this._popupSelector.querySelector('#close-button')
  }
  _handleEscClose = (evt) => {                                      //закрытие по escape
    if (evt.key === 'Escape') {
      this.close();
    };
  }
  open() {                                                        //открывает попап
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  }
  close() {                                                                //закрывает попап
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }
  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {             //слушатель закрытия по клику
      if (evt.target.classList.contains('popup_opened')) {
        this.close(evt.target);
      }
    });
    this._closeButton.addEventListener('click', () => {
      this.close()
    });
  }
}

