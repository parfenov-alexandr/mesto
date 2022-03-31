import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupForm, handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._popupForm = popupForm;
    this._handleFormSubmit = handleFormSubmit;
    this._buttonElement = this._popupForm.querySelector('.popup__submit-button');
  }
  _getInputValues() {                                                     //собирает данные полей формы
    this._inputList = this._popupForm.querySelectorAll('.form__field');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  changeSubmitHandler(newHandleFormSubmit) {
    this._handleFormSubmit = newHandleFormSubmit;
  }
  renderLoading(isLoading) {
    return isLoading ? this._buttonElement.textContent = 'Сохранение...' : this._buttonElement.textContent = 'Сохранить';
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {                               //submit для карточки
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
