let apiUrl = "https://jsonplaceholder.typicode.com/users/1/todos";
document.addEventListener("readystatechange", () => {
  let todoContainer = document.querySelector("#todoContainer");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) =>
      json
        .map((todo) => {
          let container = document.createElement("li");
          container.classList.add("table-view-cell");
          container.classList.add("media");
          container.innerHTML = `
<a class="navigate-right">
  <span class="media-object pull-left icon icon-${
    todo.completed ? "check" : "close"
  }"></span>
  <div class="media-body">${todo.title}</div>
</a>`;
          return container;
        })
        .forEach((element) => {
          todoContainer.appendChild(element);
        })
    );
});
