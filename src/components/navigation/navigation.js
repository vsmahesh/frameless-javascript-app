import * as html from "./navigation.html";
import { Logger } from "../../libs/logger";
export class Navigation extends HTMLElement {
  constructor() {
    super();
    Logger.setName("Navigation");
  }
  connectedCallback() {
    this.innerHTML = html;

    const active = this.attributes["active"]
      ? this.attributes["active"].value
      : undefined;

    const menuItem = document.querySelector(`#${active}`);
    Logger.log("Active Menu Item", menuItem);

    menuItem.removeAttribute("href");
    menuItem.classList.add("active");
  }
}
customElements.define("main-nav", Navigation);
