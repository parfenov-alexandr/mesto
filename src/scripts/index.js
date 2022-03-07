import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../components/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  formEditProfile, formAddCard, profilePopup, elementPopup,
  bigImagePopup, editButton, addButton, closeAddButton, elementTitleInput, elementImageInput,
  profileTitle, profileSubtitle, formSelectors
} from '../components/constants.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import '../pages/index.css';

const templateSelector = '#place'
export const elementsContainer = '.elements'

//открытие картинки

const handleCardClick = (link, name) => {
  const image = new PopupWithImage(bigImagePopup, {link, name});
  image.open();
  image.setEventListeners();
  image.closePopupsByOverlayClick()

}
const initialCardsList = new Section({
  items: initialCards, renderer: (data) => {
    const card = new Card(data, templateSelector, handleCardClick)
    const cardElement = card.createElement();
    initialCardsList.addItem(cardElement);
  }
}, elementsContainer);

//создание первоначальных карточек

initialCardsList.renderItems();

const info = new UserInfo(profileTitle, profileSubtitle);
const profileForm = new PopupWithForm({
  popupForm: formEditProfile,
  handleFormSubmit: () => {
    info.setUserInfo();
  }
}, profilePopup);

editButton.addEventListener('click', () => {
  formEditProfileValidate.errorMessageClean();
  formEditProfileValidate.enableSubmitButton();
  profileForm.closePopupsByOverlayClick();
  info.getUserInfo();
  profileForm.open();
  profileForm.setEventListeners();
});
const cardAddForm = new PopupWithForm({
  popupForm: formAddCard, handleFormSubmit: () => {
    const card = new Card(
      {
        name: elementTitleInput.value,
        link: elementImageInput.value
      }, templateSelector, handleCardClick).createElement()
    initialCardsList.addItem(card);
  }
}, elementPopup);

addButton.addEventListener('click', () => {
  formAddCartValidate.disableSubmitButton();
  formAddCartValidate.errorMessageClean();
  formAddCard.reset();
  cardAddForm.open();
  cardAddForm.setEventListeners();
  cardAddForm.closePopupsByOverlayClick();
});
closeAddButton.addEventListener('click', () => {
  cardAddForm.close();
});

//создание экземпляров класса FormValidator
const formEditProfileValidate = new FormValidator(formSelectors, formEditProfile);
const formAddCartValidate = new FormValidator(formSelectors, formAddCard);

//Включение валидации
formEditProfileValidate.enableValidation();
formAddCartValidate.enableValidation();
