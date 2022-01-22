const formSelectors = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active'
};
const submitForm = (evt) => {
  evt.preventDefault();
}
const showInputError = (input, errorElement, { errorClass, inputErrorClass }) => {                   //показывает ошибку
  errorElement.classList.add(errorClass);
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};
const hideInputError = (input, errorElement, { errorClass, inputErrorClass }) => {                   //прячет ошибку
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
  input.classList.remove(inputErrorClass);
};
const toggleButtonState = (form, { submitButtonSelector, inactiveButtonClass }) => {   //переключает состояние кнопки в зависимости от того валидно поле или нет
  const buttonElement = form.querySelector(submitButtonSelector);
  const isFormValid = form.checkValidity();
  if (!isFormValid) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};
const isValid = (form, input, formSelectors) => {          //проверяет валидность полей
  const errorElement = form.querySelector((`.${input.id}-error`));
  if (!input.validity.valid) {
    showInputError(input, errorElement, formSelectors);
  } else {
    hideInputError(input, errorElement, formSelectors);
  }
  toggleButtonState(form, formSelectors);
};
const enableValidation = ({ formSelector, inputSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(form => {
    form.addEventListener('submit', submitForm);
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    inputList.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input, rest)
      });
    })
    toggleButtonState(form, rest);
  });
}
enableValidation(formSelectors);
