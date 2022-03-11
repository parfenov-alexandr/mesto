import Popup from './Popup.js';

export default class PoupWithImage extends Popup {
  constructor(popupSelector, link, name) {
    super(popupSelector);
    this._link = link;
    this._name = name;
  }
  open(link, name) {                                                        //открывает большую картинку
    super.open();
    this._link.src = link;
    this._name.textContent = name;
  }
}
