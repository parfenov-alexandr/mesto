import { Card } from './Сard.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const formSelectors = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active'
};

//шаблоны
const templateSelector = '#place'
//попапы
const profilePopup = document.querySelector('.popup_type_edit');
export const elementPopup = document.querySelector('.popup_type_add');
export const bigImagePopup = document.querySelector('.popup_type_image');

//формы
export const formEditProfile = profilePopup.querySelector('.form');
export const formAddCard = elementPopup.querySelector('.form');

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
const editProfileSubmitButton = profilePopup.querySelector('.popup__submit-button');
const addCardSubmitButton = elementPopup.querySelector('.popup__submit-button');

//область с карточками
export const elementsList = document.querySelector('.elements');

//функции
export const keyHandler = (evt) => {                                            //функция для закрытия popup по escape
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    popupOpened.classList.remove('popup_opened');
  };
}
const errorMessageClean = () => {                                                          //чистит сообщения об ошибках
  const errorMessage = Array.from(document.querySelectorAll('.form__field-error_active'));
  errorMessage.forEach(item => {
    item.textContent = "";
  });
};
export const openPopup = (popup) => {
  document.addEventListener('keydown', keyHandler);              //закрытие popup нажатием escape
  popup.classList.add('popup_opened');
}
const closePopup = (popup) => {
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
const disableSubmitBtn = (buttonElement) => {
  buttonElement.classList.add('popup__submit-button_inactive');
  buttonElement.disabled = true;
}

//обработчики
editButton.addEventListener('click', () => {
  errorMessageClean();
  addProfileData();
  openPopup(profilePopup);
});
closeEditButton.addEventListener('click', () => {
  formEditProfile.reset();
  closePopup(profilePopup);
});
addButton.addEventListener('click', () => {
  errorMessageClean();
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
  disableSubmitBtn(editProfileSubmitButton);
  closePopup(profilePopup);
});
formAddCard.addEventListener('submit', (evt) => {                               //submit для карточки
  evt.preventDefault();
  const card = new Card(elementImageInput.value, elementTitleInput.value, templateSelector);
  const cardElement = card.createElement();
  elementsList.prepend(cardElement);
  formAddCard.reset();
  disableSubmitBtn(addCardSubmitButton);
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
initialCards.forEach((item) => {
  const card = new Card(item.link, item.name, templateSelector);
  const cardElement = card.createElement();
  elementsList.append(cardElement);
});

//Включение валидации
const formEditProfileValidate = new FormValidator(formSelectors, formEditProfile);
const formAddCartValidate = new FormValidator(formSelectors, formAddCard);
formEditProfileValidate.enableValidation();
formAddCartValidate.enableValidation();
