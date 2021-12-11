const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__container');
const editButton = document.querySelector('.profile__info-editbutton');
const closeButton = document.querySelector('.popup__close-icon');
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
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__occupation');
function formSubmitHandler (evt) {
    evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  actionPopup();
}
popupForm.addEventListener('submit', formSubmitHandler);
