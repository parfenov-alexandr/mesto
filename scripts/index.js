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
//шаблоны
const elementsTemplate = document.querySelector('#place').content;

//попапы
const profilePopup = document.querySelector('.popup_type_edit');
const elementPopup = document.querySelector('.popup_type_add');
const bigImagePopup = document.querySelector('.popup_type_image');

//формы
const popupForm = profilePopup.querySelector('.form');
const elementAddForm = elementPopup.querySelector('.form');

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
const nameInput = popupForm.querySelector('#name');
const jobInput = popupForm.querySelector('#occupation');
const elementTitleInput = elementAddForm.querySelector('#element-name');
const elementImageInput = elementAddForm.querySelector('#element-link');

//область с карточками
const elementsList = document.querySelector('.elements');

//функции
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {                  //закрытие popup нажатием escape
    keyHandler(evt);
    errorMessageClean();
  });
}
const closePopup = (popup) => {
  document.removeEventListener('keydown', (evt) => {
    keyHandler(evt);
  });
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
    const bigImage = bigImagePopup.querySelector('.popup__big-image');
    const bigImageTitle = bigImagePopup.querySelector('.popup__big-image-title');
    bigImage.src = link;
    bigImageTitle.textContent = name;
    bigImage.alt = 'Фотография с изображением ' + name;
  });
  return element;
}
const addElement = (elementsList, element) => {
  elementsList.prepend(element);
}

const keyHandler = (evt) => {                                            //функция для закрытия popup по escape
  const popupList = document.querySelectorAll('.popup');
  popupList.forEach((item) => {
    if (evt.key === 'Escape') {
      item.classList.remove('popup_opened');
    };
  });
}

//обработчики
editButton.addEventListener('click', () => {
  addProfileData();
  openPopup(profilePopup);
});
closeEditButton.addEventListener('click', () => {
  errorMessageClean();
  popupForm.reset();
  closePopup(profilePopup);
});
addButton.addEventListener('click', () => {
  elementAddForm.reset();
  openPopup(elementPopup);
});
closeAddButton.addEventListener('click', () => {
  errorMessageClean();
  elementAddForm.reset();
  closePopup(elementPopup);
});
popupForm.addEventListener('submit', (evt) => {                              //submit для профиля
  evt.preventDefault();
  updateProfileData();
  closePopup(profilePopup);
});
elementAddForm.addEventListener('submit', (evt) => {                               //submit для карточки
  evt.preventDefault();
  addElement(elementsList, createElement(elementTitleInput.value, elementImageInput.value))
  elementAddForm.reset();
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
const closePopupOnOverlay = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((item) => {
    item.addEventListener('click', (evt) => {
      errorMessageClean();
      evt.target.classList.remove('popup_opened');
    });
  });
}
closePopupOnOverlay();
