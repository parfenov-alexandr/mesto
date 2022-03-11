import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupForm, handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._popupForm = popupForm;
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {                                                     //собирает данные полей формы
    this._inputList = this._popupForm.querySelectorAll('.form__field');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {                               //submit для карточки
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}
