function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemTitle = document.querySelector("#poem-title");
  let apiKey = "ofee7b234ec9d8b106dbf7831at13c09";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate in 3 new lines in basic HTML. Every line of the poem should be ended at full stop. Make sure to follow user instructions. Please don't include the title of poem. Make sure do sign the poem with 'SheCodes AI' inside <strong> element at the end of the poem.";
  let prompt = `User instructions: Generate an English Poem about ${poemTitle.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛Generating a poem about ${poemTitle.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
