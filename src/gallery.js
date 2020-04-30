import { Logger } from "./libs/logger";
import { ComponentModule } from "./components";

ComponentModule.init();
Logger.setName("Gallery.js");
let apiUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
_Log("Setup apiUrl", apiUrl);
document.addEventListener("readystatechange", () => {
  _Log("Document ReadyStateChang event", document.readyState);
  if (document.readyState === "complete") {
    initApplication();
  }
});

function initApplication() {
  _Log("Initializing Application");
  let imageContainer = document.querySelector("#imageContainer");
  fetch(apiUrl)
    .then((response) => {
      _Log("Response from API", response);
      return response.json();
    })
    .then((json) =>
      json
        .map((image) => {
          let container = document.createElement("div");
          container.classList.add("card");
          let thumbnail = document.createElement("img");
          thumbnail.src = image.thumbnailUrl;
          thumbnail.alt = image.title;
          container.appendChild(thumbnail);
          return container;
        })
        .forEach((element) => {
          imageContainer.appendChild(element);
        })
    );
}

function _Log(...message) {
  Logger.log(...message);
}
