const popup = document.querySelector('.popup_type_edit');
const popupForm = document.querySelector('.form')
const editButton = document.querySelector('.profile__info-edit-button');
const closeButton = popup.querySelector('.popup__close-icon');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#occupation');
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

//ПР5

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
const elementsList = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#place').content;
const addButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('.popup_type_add');
const elementAddForm = document.querySelector('#elementInput')
const closeAddButton = popupElement.querySelector('.popup__close-icon');
const elementTitleInput = document.querySelector('#element-name');
const elementImageInput = document.querySelector('#element-link');
const imageEnlargeButton = document.querySelector('.element__enlarge');

initialCards.forEach(function (item) {
  const element = elementsTemplate.cloneNode(true);
  element.querySelector('.element__image').src = item.link;
  element.querySelector('.element__title').textContent = item.name;
  element.querySelector('.element__vector').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__vector_active');
  });
  const deleteButton = element.querySelector('.element__delete');
  deleteButton.addEventListener('click', function () {
    const delElement = deleteButton.closest('.element');
    delElement.remove();
  });
  elementsList.append(element);
});

function openAddForm() {
  popupElement.classList.add('popup_opened');
}

function closeAddForm() {
  popupElement.classList.remove('popup_opened');
}

function elementFormSubmit(evt) {
  evt.preventDefault();
  const element = elementsTemplate.cloneNode(true);
  element.querySelector('.element__image').src = elementImageInput.value;
  element.querySelector('.element__title').textContent = elementTitleInput.value;
  element.querySelector('.element__vector').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__vector_active');
  });
  const deleteButton = element.querySelector('.element__delete');
  deleteButton.addEventListener('click', function () {
    const delElement = deleteButton.closest('.element');
    delElement.remove();
  });
  elementsList.prepend(element);
  elementAddForm.reset();
  closeAddForm();
}

function elementEnlarge() {

}

addButton.addEventListener('click', openAddForm);
closeAddButton.addEventListener('click', closeAddForm);
elementAddForm.addEventListener('submit', elementFormSubmit);
