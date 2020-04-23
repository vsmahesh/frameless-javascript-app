let apiUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
document.addEventListener("readystatechange", () => {
  let imageContainer = document.querySelector("#imageContainer");
  fetch(apiUrl)
    .then((response) => response.json())
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
});
