function displayPoem(response) {
  console.log("Poem Generated....");
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
    "You are a romantic poem expert and love to write short poems. Your mission is to generate in 4 new lines in basic HTML.Every line should be ended at full stop. Make sure to follow user instructions. Don't include the title of poem. Sign the poem with 'SheCodes AI' inside <strong> element at the end.";
  let prompt = `User instructions: Generate an English Poem about ${poemTitle.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating a poem");
  console.log(`Prompt: ${prompt}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
