//попапы
export const profilePopup = document.querySelector('.popup_type_edit');
export const elementPopup = document.querySelector('.popup_type_add');
export const bigImagePopup = document.querySelector('.popup_type_image');

//массив из всех попапов
export const popupList = Array.from(document.querySelectorAll('.popup'));

//формы
export const formEditProfile = profilePopup.querySelector('.form');
export const formAddCard = elementPopup.querySelector('.form');

//кнопки открытия форм
export const editButton = document.querySelector('.profile__info-edit-button');
export const addButton = document.querySelector('.profile__add-button');

//увеличенная картинка
export const bigImage = bigImagePopup.querySelector('.popup__big-image');
export const bigImageTitle = bigImagePopup.querySelector('.popup__big-image-title');

// поля формы редактирования профиля
export const nameInput = formEditProfile.querySelector('#name');
export const jobInput = formEditProfile.querySelector('#occupation');

//поля формы добавления карточки
export const elementTitleInput = formAddCard.querySelector('#element-name');
export const elementImageInput = formAddCard.querySelector('#element-link');

//сабмиты форм
export const editProfileSubmitButton = profilePopup.querySelector('.popup__submit-button');
export const addCardSubmitButton = elementPopup.querySelector('.popup__submit-button');

//объект с селекторами профиля
export const profileSelectors = {
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle',
};

//объект с селекторами формы
export const formSelectors = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__field-error_active',
  errorCleanClass: '.form__field-error_active'
};

// первоначальный массив карточек
export const initialCards = [
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
