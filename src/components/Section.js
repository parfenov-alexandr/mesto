export default class Section {
    constructor({ items, renderer }, elementsContainer) {
        this._initialCards = items;
        this._container = document.querySelector(elementsContainer);
        this._renderer = renderer;
    }
    renderItems() {                                               //отрисовывает элемент
      this._initialCards.forEach(item => this._renderer(item))
    }
    addItem(element) {
        this._container.prepend(element);                       //добавляет элемент в контейнер
    }
}
