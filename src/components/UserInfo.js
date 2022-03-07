import { profileTitle, profileSubtitle, nameInput, jobInput } from '../components/constants.js'

export default class UserInfo {
  constructor( name, job ) {
    this.name = name;
    this.job = job;
  }
  getUserInfo() {               //берем данные для формы
    nameInput.value  = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
  }
  setUserInfo() {
    this.name.textContent = nameInput.value;  //заполняем поля через форму
    this.job.textContent = jobInput.value;
  }
}
