import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../components/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  formEditProfile, formAddCard, profilePopup, elementPopup,
  bigImagePopup, editButton, addButton, elementTitleInput, elementImageInput, nameInput, jobInput,
  formSelectors, profileSelectors, bigImage, bigImageTitle
} from '../components/constants.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import '../pages/index.css'

const templateSelector = '#place'
export const elementsContainer = '.elements'

//открытие картинки
const image = new PopupWithImage(bigImagePopup, bigImage, bigImageTitle);
image.setEventListeners();
const handleCardClick = (link, name) => {
  image.open(link, name)
  bigImage.alt = `Фотография с изображением ${name}`;
}

const createCard = (data) => {
  const card = new Card(data, templateSelector, handleCardClick)
  const cardElement = card.createElement();
  cardsList.addItem(cardElement);
}

const cardsList = new Section({
  items: initialCards, renderer: (data) => {
    createCard(data);
  }
}, elementsContainer);

//создание первоначальных карточек
cardsList.renderItems();

const info = new UserInfo(profileSelectors);
info.getUserInfo();

const profileEditForm = new PopupWithForm({
  popupForm: formEditProfile,
  handleFormSubmit: () => {
    info.setUserInfo(nameInput.value, jobInput.value);
  }
}, profilePopup);
profileEditForm.setEventListeners();

const getUserInfo = () => {
  nameInput.value = info.getUserInfo()['userName'];
  jobInput.value = info.getUserInfo()['userJob']
}

editButton.addEventListener('click', () => {
  formEditProfileValidate.errorMessageClean();
  formEditProfileValidate.enableSubmitButton();
  profileEditForm.open();
  getUserInfo();
});

const cardAddForm = new PopupWithForm({
  popupForm: formAddCard, handleFormSubmit: () => {
    createCard({
      name: elementTitleInput.value,
      link: elementImageInput.value
    });
  }
}, elementPopup);
cardAddForm.setEventListeners();

addButton.addEventListener('click', () => {
  formAddCartValidate.disableSubmitButton();
  formAddCartValidate.errorMessageClean();
  formAddCard.reset();
  cardAddForm.open();
});

//создание экземпляров класса FormValidator
const formEditProfileValidate = new FormValidator(formSelectors, formEditProfile);
const formAddCartValidate = new FormValidator(formSelectors, formAddCard);

//Включение валидации
formEditProfileValidate.enableValidation();
formAddCartValidate.enableValidation();
