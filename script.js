const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.getElementById("_button");

button.addEventListener("click", () => {
    container.classList.toggle("active");

    if (container.classList.contains("active")) {
        input.focus();
    } else {
        input.value = "";
    }
});
