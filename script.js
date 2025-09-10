const button = document.querySelector(".button-add");
const input = document.querySelector(".input-box input");
const list = document.querySelector(".list ul");

const newLi = "";

button.addEventListener("click", () => {
  if (input.value !== "") {
    const newLi = document.createElement("li");
    newLi.classList.add("newLi");
    newLi.innerHTML = input.value;
    list.append(newLi);
    input.value = "";
  }
});

newLi.addEventListener("click", () => {
  newLi.remove();
});
