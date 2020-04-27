class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const someElement = document.createElement("div");
    someElement.innerText = "Hello World! I am a web component";
    this.appendChild(someElement);
  }
}

customElements.define("hello-world", HelloWorld);
