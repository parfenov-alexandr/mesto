import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  formEditProfile, formAddCard, formConfirm, profilePopup, elementPopup,
  bigImagePopup, avatarPopup, formAvatar, editButton, addButton, avatarSetButton, nameInput, jobInput,
  formSelectors, profileSelectors, bigImage, bigImageTitle, confirmPopup
} from '../components/constants.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { api } from '../components/Api.js';
import '../pages/index.css';

const templateSelector = '#place'
export const elementsContainer = '.elements'

const info = new UserInfo(profileSelectors);

//получение данных профиля и карточек
let userId;
Promise.all([api.getProfile(), api.getCards()])
  .then(([res, list]) => {
    {
      info.setUserInfo(res.name, res.about);
      info.setAvatar(res.avatar)
      userId = res._id
    }
    {
      list.reverse().forEach(data => {
        const card = createCard({
          name: data.name,
          link: data.link,
          likes: data.likes,
          id: data._id,
          userId: userId,
          ownerId: data.owner._id
        })
        cardsList.renderItems(card);
      })
    }
  })
  .catch(console.log)

//функция для заполнения полей формы данными профиля
const getUserInfo = () => {
  nameInput.value = info.getUserInfo()['userName'];
  jobInput.value = info.getUserInfo()['userJob'];
}

//увеличение картинки
const image = new PopupWithImage(bigImagePopup, bigImage, bigImageTitle);
image.setEventListeners();
const handleCardClick = (link, name) => {
  image.open(link, name)
  bigImage.alt = `Фотография с изображением ${name}`;
}

//функция создания  карточки
const createCard = (data) => {
  const card = new Card(data,
    templateSelector,
    handleCardClick,
    (id) => {
      confirmPopupForm.open();
      confirmPopupForm.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(res => {
            card.deleteElement(res);
            confirmPopupForm.close()
          })
          .catch(console.log)
      })
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch(console.log)
      } else {
        api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch(console.log)
      }
    }
  )
  const cardElement = card.createElement();
  cardsList.addItem(cardElement);
}
const cardsList = new Section({
  items: [], renderer: createCard
}, elementsContainer)

//обновление аватара
avatarSetButton.addEventListener('click', () => {
  formAvatarValidate.errorMessageClean();
  formAvatar.reset();
  updateAvatar.open();
});
const updateAvatar = new PopupWithForm({
  popupForm: formAvatar,
  handleFormSubmit: (data) => {
    updateAvatar.renderLoading(true);
    api.editAvatar(data['avatar'])
      .then(() => {
        info.setAvatar(data['avatar']);
        updateAvatar.close()
      })
      .catch(console.log)
      .finally(() => {
        updateAvatar.renderLoading(false)
      })
  }
}, avatarPopup)
updateAvatar.setEventListeners()

//редактирование профиля
editButton.addEventListener('click', () => {
  formEditProfileValidate.errorMessageClean();
  formEditProfileValidate.enableSubmitButton();
  profileEditForm.open();
  getUserInfo();
});
const profileEditForm = new PopupWithForm({
  popupForm: formEditProfile,
  handleFormSubmit: (data) => {
    profileEditForm.renderLoading(true);
    api.editProfile(data['name'], data['occupation'])
      .then((res) => {
        info.setUserInfo(data['name'], data['occupation']);
        profileEditForm.close();
      })
      .catch(console.log)
      .finally((res) => {
        profileEditForm.renderLoading(false);
      })
  }
}, profilePopup);
profileEditForm.setEventListeners();

//создание нововй карточки
addButton.addEventListener('click', () => {
  formAddCartValidate.disableSubmitButton();
  formAddCartValidate.errorMessageClean();
  formAddCard.reset();
  cardAddForm.open();
});
const cardAddForm = new PopupWithForm({
  popupForm: formAddCard, handleFormSubmit: (data) => {
    cardAddForm.renderLoading(true);
    api.addCard(data['element-name'], data['element-link'])
      .then(res => {
        createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          id: res._id,
          userId: userId,
          ownerId: res.owner._id
        })
        cardAddForm.close();
      })
      .catch(console.log)
      .finally(() => {
        cardAddForm.renderLoading(false);
      })
  }
}, elementPopup);
cardAddForm.setEventListeners();

//подтверждение удаления карточки
const confirmPopupForm = new PopupWithForm({
  popupForm: formConfirm
}, confirmPopup)
confirmPopupForm.setEventListeners()

//создание экземпляров класса FormValidator
const formEditProfileValidate = new FormValidator(formSelectors, formEditProfile);
const formAddCartValidate = new FormValidator(formSelectors, formAddCard);
const formAvatarValidate = new FormValidator(formSelectors, formAvatar);

//Включение валидации
formEditProfileValidate.enableValidation();
formAddCartValidate.enableValidation();
formAvatarValidate.enableValidation();
