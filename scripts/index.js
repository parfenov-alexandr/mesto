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

//попапы
const profilePopup = document.querySelector('.popup_type_edit');
const elementPopup = document.querySelector('.popup_type_add');
const bigImagePopup = document.querySelector('.popup_type_image-enlarge');

//формы
const popupForm = profilePopup.querySelector('.form');
const elementAddForm = elementPopup.querySelector('.form');

//кнопки
const editButton = document.querySelector('.profile__info-edit-button');
const closeButton = profilePopup.querySelector('.popup__close-icon');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = elementPopup.querySelector('.popup__close-icon')

//поля
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');

//поля ввода
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#occupation');
const elementTitleInput = document.querySelector('#element-name');
const elementImageInput = document.querySelector('#element-link');

//шаблоны
const imageTemplate = document.querySelector('#image').content;
const elementsTemplate = document.querySelector('#place').content;

const elementsList = document.querySelector('.elements');


//функции
function togglePopup() {
  profilePopup.classList.toggle('popup_opened');
}
function toggleAddForm() {
  elementPopup.classList.toggle('popup_opened');
}
function createElement(item) {
  const element = elementsTemplate.cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  elementImage.src = item.link;
  elementTitle.textContent = item.name;
  element.querySelector('.element__vector').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__vector_active');
  });
  const deleteButton = element.querySelector('.element__delete');
  deleteButton.addEventListener('click', function () {
    const deleteElement = deleteButton.closest('.element');
    deleteElement.remove();
  });
  elementImage.addEventListener('click', function () {
    bigImagePopup.classList.toggle('popup_opened');
    const bigImage = imageTemplate.cloneNode(true);
    const bigImageContainer = bigImage.querySelector('.element__big-image');
    const bigImageTitle = bigImage.querySelector('.popup__image-title');
    bigImageContainer.src = item.link;
    bigImageTitle.textContent = item.name;
    const container = bigImage.querySelector('.element__big-image-container');
    const closeImageButton = bigImage.querySelector('.popup__image-close-icon');
    closeImageButton.addEventListener('click', function () {
      bigImagePopup.classList.toggle('popup_opened');
      container.remove();
    });
    bigImagePopup.append(bigImage);
  });
  elementsList.prepend(element);
}

//действия
editButton.addEventListener('click', function () {
  togglePopup();
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});
closeButton.addEventListener('click', togglePopup);
addButton.addEventListener('click', toggleAddForm);
closeAddButton.addEventListener('click', toggleAddForm);
popupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  togglePopup();
});
elementAddForm.addEventListener('submit', function (evt) {
  evt.preventDefault()
  createElement({
    name: elementTitleInput.value,
    link: elementImageInput.value
  });
  elementAddForm.reset();
  toggleAddForm();
});
initialCards.forEach(createElement);
