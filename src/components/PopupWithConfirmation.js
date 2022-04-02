import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupForm, handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._popupForm = popupForm;
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
