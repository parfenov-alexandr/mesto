const showInputError = (formElement, formInput, errorMessage) => {    //показывает ошибку
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('form__field_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__field-error_active')
};
const hideInputError = (formElement, formInput) => {     //убирает ошибку
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('form__field_type_error');
  errorElement.classList.remove('form__field-error_active')
  errorElement.textContent = '';
};
const isValid = (formElement, formInput) => {   //проверяет валидность полей
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};
const hasInvalidInput = (inputList) => {   //проверяет есть ли не валидное поле в форме
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  })
};
const toggleButtonState = (inputList, buttonElement) => {   //переключает состояние кнопки в зависимости от того валидно поле или нет
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit-button_inactive');
  } else {
    buttonElement.classList.remove('popup__submit-button_inactive');
  }
};
const setEventListeners = (formElement) => {                                     //слушает поля ввода в форме
  const inputList = Array.from(formElement.querySelectorAll('.form__field'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((formInput) => {
    formElement.addEventListener('input', () => {
      isValid(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const errorMessageClean = () => {                                                          //чистит сообщения об ошибках
  const errorMessage = Array.from(document.querySelectorAll('.form__field-error_active'));
  errorMessage.forEach((item) => {
    item.textContent = "";
  });
};
const enableValidation = () => {                                           //слушает формы
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
enableValidation({
  formSelector: 'form',
  inputSelector: 'form__field',
  submitButtonSelector: 'popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active'
});
