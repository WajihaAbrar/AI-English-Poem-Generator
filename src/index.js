function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Flowers are beautiful",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
