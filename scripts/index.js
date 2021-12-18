let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.form')
let editButton = document.querySelector('.profile__info-edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#occupation');
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
