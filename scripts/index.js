let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__container');
let editButton = document.querySelector('.profile__info-editbutton');
let closeButton = document.querySelector('.popup__close-icon');
function actionPopup() {
  popup.classList.toggle('popup_opened');
  popupForm.classList.toggle('popup_opened-container');
}
function closePopup() {
  popup.classList.toggle('popup_opened');
  popupForm.classList.toggle('popup_opened-container');
  nameInput.value = "";
  jobInput.value = "";
}
editButton.addEventListener('click', actionPopup);
closeButton.addEventListener('click', closePopup);
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__occupation');
function formSubmitHandler (evt) {
    evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  actionPopup();
}
popupForm.addEventListener('submit', formSubmitHandler);
