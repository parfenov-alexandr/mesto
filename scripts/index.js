//шаблоны
const elementsTemplate = document.querySelector('#place').content;

//попапы
const profilePopup = document.querySelector('.popup_type_edit');
const elementPopup = document.querySelector('.popup_type_add');
const bigImagePopup = document.querySelector('.popup_type_image');

//формы
const formEditProfile = profilePopup.querySelector('.form');
const formAddCard = elementPopup.querySelector('.form');

//кнопки
const editButton = document.querySelector('.profile__info-edit-button');
const closeEditButton = profilePopup.querySelector('.popup__close-icon');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = elementPopup.querySelector('.popup__close-icon');
const closeImageButton = bigImagePopup.querySelector('.popup__image-close-icon');
const buttonElement = profilePopup.querySelector('.popup__submit-button');

//поля
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');

//поля ввода
const nameInput = formEditProfile.querySelector('#name');
const jobInput = formEditProfile.querySelector('#occupation');
const elementTitleInput = formAddCard.querySelector('#element-name');
const elementImageInput = formAddCard.querySelector('#element-link');

//большая картинка с подписью
const bigImage = bigImagePopup.querySelector('.popup__big-image');
const bigImageTitle = bigImagePopup.querySelector('.popup__big-image-title');

//область с карточками
const elementsList = document.querySelector('.elements');

//функции
const keyHandler = (evt) => {                                            //функция для закрытия popup по escape
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    popupOpened.classList.remove('popup_opened');
  };
}
const errorMessageClean = () => {                                                          //чистит сообщения об ошибках
  const errorMessage = Array.from(document.querySelectorAll('.form__field-error_active'));
  errorMessage.forEach((item) => {
    item.textContent = "";
  });
};
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  errorMessageClean();
  document.addEventListener('keydown', keyHandler);                 //закрытие popup нажатием escape
}

const closePopup = (popup) => {
  document.addEventListener('keydown', keyHandler);                 //закрытие popup нажатием escape
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
const deleteElement = (evt) => {
  evt.target.closest('.element').remove();
}
const like = (evt) => {
  evt.target.classList.toggle('element__vector_active');
}
const createElement = (name, link) => {
  const element = elementsTemplate.cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const likeButton = element.querySelector('.element__vector');
  const deleteButton = element.querySelector('.element__delete');
  elementImage.src = link;
  elementTitle.textContent = name;
  elementImage.alt = 'Фотография с изображением ' + name;
  deleteButton.addEventListener('click', deleteElement);
  likeButton.addEventListener('click', like);
  elementImage.addEventListener('click', () => {
    openPopup(bigImagePopup);
    bigImage.src = link;
    bigImageTitle.textContent = name;
    bigImage.alt = 'Фотография с изображением ' + name;
  });
  return element;
}
const addElement = (elementsList, element) => {
  elementsList.prepend(element);
}

//обработчики
editButton.addEventListener('click', () => {
  addProfileData();
  openPopup(profilePopup);
});
closeEditButton.addEventListener('click', () => {
  formEditProfile.reset();
  closePopup(profilePopup);
});
addButton.addEventListener('click', () => {
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
  const buttonElement = formEditProfile.querySelector('.popup__submit-button');
  buttonElement.classList.add('popup__submit-button_inactive');
  closePopup(profilePopup);
});
formAddCard.addEventListener('submit', (evt) => {                               //submit для карточки
  evt.preventDefault();
  addElement(elementsList, createElement(elementTitleInput.value, elementImageInput.value))
  formAddCard.reset();
  const buttonElement = formAddCard.querySelector('.popup__submit-button');
  buttonElement.classList.add('popup__submit-button_inactive');
  closePopup(elementPopup);
});
closeImageButton.addEventListener('click', () => {
  closePopup(bigImagePopup);
})

//первоначальное размещение карточек на странице
initialCards.forEach((element) => {
  addElement(elementsList, createElement(element.name, element.link))
});

//закрытие popup кликом по overlay
const closePopupsByOverlayClick = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((item) => {
    item.addEventListener('click', (evt) => {
      closePopup(evt.target);
    });
  });
}
closePopupsByOverlayClick();
