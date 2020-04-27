class Navigation extends HTMLElement {
  constructor() {
    super();
    const element = document.createElement("nav");
    element.className = "bar bar-tab";

    element.innerHTML = `
    <a class="tab-item active">
    <span class="icon icon-home"></span>
    <span class="tab-label">Home</span>
  </a>
  <a class="tab-item" href="/gallery.html">
    <span class="icon icon-pages"></span>
    <span class="tab-label">Gallery</span>
  </a>
  <a class="tab-item" href="/contact.html">
    <span class="icon icon-compose"></span>
    <span class="tab-label">Contact</span>
  </a>
  <a class="tab-item" href="/settings.html">
    <span class="icon icon-gear"></span>
    <span class="tab-label">Settings</span>
  </a>
    `;

    this.appendChild(element);
  }
  //   connectedCallback() {
  //     // const someElement = document.createElement("div");
  //     // someElement.innerText = "I am a web component";
  //     // this.appendChild();
  //     console.log("[Navigation.js] ConnectedCallback triggered");
  //   }
}

customElements.define("main-nav", Navigation);
