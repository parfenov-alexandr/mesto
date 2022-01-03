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

//поля
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');

//поля ввода
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#occupation');
const elementTitleInput = document.querySelector('#element-name');
const elementImageInput = document.querySelector('#element-link');

//область с карточками
const elementsList = document.querySelector('.elements');

//функции
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
function addProfileData() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
function updateProfileData() {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}
function deleteElement(evt) {
  evt.target.closest('.element').remove();
}
function like(evt) {
  evt.target.classList.toggle('element__vector_active');
}
function createElement(name, link) {
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
  elementImage.addEventListener('click', function () {
    openPopup(bigImagePopup);
    const bigImage = bigImagePopup.querySelector('.popup__big-image');
    const bigImageTitle = bigImagePopup.querySelector('.popup__big-image-title');
    bigImage.src = link;
    bigImageTitle.textContent = name;
    bigImage.alt = 'Фотография с изображением ' + name;
  });
  return element;
}
function addElement(elementsList, element) {
  elementsList.prepend(element);
}

//действия
editButton.addEventListener('click', function () {
  addProfileData();
  openPopup(profilePopup);
});
closeEditButton.addEventListener('click', function () {
  closePopup(profilePopup)
});
addButton.addEventListener('click', function () {
  openPopup(elementPopup);
});
closeAddButton.addEventListener('click', function () {
  closePopup(elementPopup);
});
popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  updateProfileData();
  closePopup(profilePopup);
});
elementAddForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addElement(elementsList, createElement(elementTitleInput.value, elementImageInput.value))
  elementAddForm.reset();
  closePopup(elementPopup);
});
closeImageButton.addEventListener('click', function () {
  closePopup(bigImagePopup);
})

//первоначальное размещение карточек на странице

initialCards.forEach(function (element) {
  addElement(elementsList, createElement(element.name, element.link))
});
