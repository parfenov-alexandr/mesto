export default class UserInfo {
  constructor(profileSelectors) {
    this._userName = document.querySelector(profileSelectors.nameSelector);
    this._userJob = document.querySelector(profileSelectors.jobSelector);
    this._userAvatar = document.querySelector(profileSelectors.avatarSelector);
  };
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    }
  };
  setUserInfo(name, job) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
  setAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}
