export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._inputList = Array.from(this._form.querySelectorAll(settings.inputSelector));
  }
  disableSubmitButton = () => {
    const { submitButtonSelector, inactiveButtonClass } = this._settings;
    this.buttonElement = this._form.querySelector(submitButtonSelector);
    this.buttonElement.classList.add(inactiveButtonClass);
    this.buttonElement.disabled = true;
  }
  enableSubmitButton = () => {
    const { submitButtonSelector, inactiveButtonClass } = this._settings;
    this._buttonElement = this._form.querySelector(submitButtonSelector)
    this._buttonElement.classList.remove(inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  _toggleButtonState = () => {               //переключает состояние кнопки в зависимости от того валидно поле или нет
    const isFormValid = this._form.checkValidity();
    if (!isFormValid) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  };
  _showInputError = (input) => {                   //показывает ошибку
    const { errorClass, inputErrorClass } = this._settings;
    this._errorElement.classList.add(errorClass);
    this._errorElement.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
  };
  _hideInputError = (input) => {                   //прячет ошибку
    const { errorClass, inputErrorClass } = this._settings;
    this._errorElement.classList.remove(errorClass);
    this._errorElement.textContent = '';
    input.classList.remove(inputErrorClass);
  };
  _isValid = (input) => {          //проверяет валидность полей
    this._errorElement = this._form.querySelector(`.${input.id}-error`);
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
    this._toggleButtonState();
  };
  errorMessageClean = () => {
    const { errorCleanClass } = this._settings;
    this.errorMessage = Array.from(this._form.querySelectorAll(errorCleanClass));
    this.errorMessage.forEach(input => {
      input.textContent = "";
    });
  };
  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
      });
      this._toggleButtonState();
    });
  }
}
