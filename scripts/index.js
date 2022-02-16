import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-cards.js';

const formSelectors = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active',
  errorCleanClass: '.form__field-error_active'
};

//шаблоны
const templateSelector = '#place'

//попапы
const profilePopup = document.querySelector('.popup_type_edit');
const elementPopup = document.querySelector('.popup_type_add');
export const bigImagePopup = document.querySelector('.popup_type_image');

//формы
const formEditProfile = profilePopup.querySelector('.form');
const formAddCard = elementPopup.querySelector('.form');

//кнопки
const editButton = document.querySelector('.profile__info-edit-button');
const closeEditButton = profilePopup.querySelector('.popup__close-icon');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = elementPopup.querySelector('.popup__close-icon');
const closeImageButton = bigImagePopup.querySelector('.popup__image-close-icon');

//поля
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');

//поля ввода
const nameInput = formEditProfile.querySelector('#name');
const jobInput = formEditProfile.querySelector('#occupation');
const elementTitleInput = formAddCard.querySelector('#element-name');
const elementImageInput = formAddCard.querySelector('#element-link');

//большая картинка с подписью
export const bigImage = bigImagePopup.querySelector('.popup__big-image');
export const bigImageTitle = bigImagePopup.querySelector('.popup__big-image-title');

//список всех попапов
const popupList = Array.from(document.querySelectorAll('.popup'));

//сабмиты попапов
export const editProfileSubmitButton = profilePopup.querySelector('.popup__submit-button');
export const addCardSubmitButton = elementPopup.querySelector('.popup__submit-button');

//область с карточками
const elementsList = document.querySelector('.elements');

//функции
const closeByEscape = (evt) => {                              //закрытие popup нажатием escape
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
}
export const openPopup = (popup) => {
  document.addEventListener('keydown', closeByEscape);     
  popup.classList.add('popup_opened');
}
const closePopup = (popup) => {
  popup.removeEventListener('keydown', closeByEscape); 
  popup.classList.remove('popup_opened');
}
const addProfileData = () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
const updateProfileData = () => {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}
const createCard = (data) => {
  const card = new Card(data, templateSelector);
  const cardElement = card.createElement();
  elementsList.prepend(cardElement)
}

//обработчики
editButton.addEventListener('click', () => {
  formEditProfileValidate.errorMessageClean();
  formEditProfileValidate.enableSubmitButton();
  addProfileData();
  openPopup(profilePopup);
});
closeEditButton.addEventListener('click', () => {
  formEditProfile.reset();
  closePopup(profilePopup);
});
addButton.addEventListener('click', () => {
  formAddCartValidate.disableSubmitButton()
  formAddCartValidate.errorMessageClean();
  formAddCard.reset();
  openPopup(elementPopup);
});
closeAddButton.addEventListener('click', () => {
  formAddCard.reset();
  closePopup(elementPopup);
});
formEditProfile.addEventListener('submit', (evt) => {                              //submit для профиля
  evt.preventDefault();
  updateProfileData();
  closePopup(profilePopup);
});
formAddCard.addEventListener('submit', (evt) => {                               //submit для карточки
  evt.preventDefault();
  createCard({
    name: elementTitleInput.value,
    link: elementImageInput.value
  });
  formAddCard.reset();
  closePopup(elementPopup);
});
closeImageButton.addEventListener('click', () => {
  closePopup(bigImagePopup);
})

//закрытие popup кликом по overlay
const closePopupsByOverlayClick = () => {
  popupList.forEach(item => {
    item.addEventListener('click', (evt) => {
      closePopup(evt.target);
    });
  });
}
closePopupsByOverlayClick();

//Первоначальное размещение карточек
initialCards.forEach((data) => {
  createCard(data)
});

//создание экземпляров класса FormValidator
const formEditProfileValidate = new FormValidator(formSelectors, formEditProfile);
const formAddCartValidate = new FormValidator(formSelectors, formAddCard);

//Включение валидации
formEditProfileValidate.enableValidation();
formAddCartValidate.enableValidation();
