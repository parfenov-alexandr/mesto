import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupForm, handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._popupForm = popupForm;
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.form__field');
    this._formValues = [];
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
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
