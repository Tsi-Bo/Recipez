import View from "./View.js";
import icons from "../../img/icons.svg";

class LinksView extends View {
  // _parentElement = document.querySelector("");
  _window = document.querySelector(".intro");
  _btnClose = document.querySelector(".intro__btn");

  constructor() {
    super();
    this._addHandlerHideWindown();
  }

  closeWindow() {
    this._window.classList.toggle("hidden");
  }

  // Run this directly when the object is created, so in the constructor. No need for controller.

  _addHandlerHideWindown() {
    this._btnClose.addEventListener("click", this.closeWindow.bind(this));
  }

  _generateMarkup() {}
}

export default new LinksView();
