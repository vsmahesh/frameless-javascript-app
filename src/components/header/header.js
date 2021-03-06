import * as html from "./header.html";
export class PageHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = html;

    const title = this.attributes["title"]
      ? this.attributes["title"].value
      : "";

    document.querySelector("#header").innerHTML = title;

    // const shadowRoot = this.attachShadow({ mode: "open" });
    // shadowRoot.innerHTML = html;

    // const title = this.attributes["title"]
    //   ? this.attributes["title"].value
    //   : "";

    // shadowRoot.querySelector("#header").innerHTML = title;
  }
}
customElements.define("page-header", PageHeader, { extends: "header" });
