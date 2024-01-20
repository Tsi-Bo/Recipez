import View from "./View.js";
import icons from "../../img/icons.svg";

class LinksView extends View {
  // _parentElement = document.querySelector("");
  _window = document.querySelector(".links-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--links");
  _btnClose = document.querySelector(".links-window--btn");

  constructor() {
    super();
    this._addHandlerShowWindown();
    this._addHandlerHideWindown();
  }

  closeWindow() {
    this._overlay.classList.add("hidden");
    this._window.classList.add("hidden");
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  // Run this directly when the object is created, so in the constructor. No need for controller.
  _addHandlerShowWindown() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindown() {
    this._btnClose.addEventListener("click", this.closeWindow.bind(this));
    this._overlay.addEventListener("click", this.closeWindow.bind(this));
  }

  _generateMarkup() {}
}

export default new LinksView();
