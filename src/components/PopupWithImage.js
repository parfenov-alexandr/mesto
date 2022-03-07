import Popup from './Popup.js';
import { bigImage, bigImageTitle } from '../components/constants.js';

export default class PoupWithImage extends Popup {
  constructor(popupSelector, data) {
    super(popupSelector);
    this._link = data.link;
    this._name = data.name;
  }
  open() {                                                        //открывает большую картинку
    super.open();
    bigImage.src = this._link;
    bigImageTitle.textContent = this._name;
    bigImage.alt = 'Фотография с изображением ' + this._name;
  }
}
