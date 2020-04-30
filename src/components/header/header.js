export class PageHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.attributes["title"]
      ? this.attributes["title"].value
      : "";
    this.innerHTML = `<h1 class="title">${title}</h1>`;
  }
}
customElements.define("page-header", PageHeader, { extends: "header" });
