export class Navigation extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const element = document.createElement("nav");
    element.className = "bar bar-tab";

    const active = this.attributes["active"]
      ? this.attributes["active"].value
      : undefined;
    [
      { key: "home", label: "Home", url: "/index.html", icon: "home" },
      { key: "gallery", label: "Gallery", url: "/gallery.html", icon: "pages" },
      {
        key: "contact",
        label: "Contact",
        url: "/contact.html",
        icon: "compose",
      },
      {
        key: "settings",
        label: "Settings",
        url: "/settings.html",
        icon: "gear",
      },
    ]
      .map((menuItem) => {
        const link = document.createElement("a");
        link.className = `tab-item${active === menuItem.key ? " active" : ""}`;
        if (active !== menuItem.key) {
          link.href = menuItem.url;
        }

        // Icon
        const spanIcon = document.createElement("span");
        spanIcon.className = `icon icon-${menuItem.icon}`;
        link.appendChild(spanIcon);

        // Label
        const spanLabel = document.createElement("span");
        spanLabel.className = `tab-label`;
        spanLabel.innerText = menuItem.label;
        link.appendChild(spanLabel);

        return link;
      })
      .forEach((menuElement) => element.appendChild(menuElement));

    this.appendChild(element);
  }

  _Log(...messages) {
    console.log("[Navigation.js]", ...messages);
  }
}
customElements.define("main-nav", Navigation);
