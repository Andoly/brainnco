const dontChange = ["da", "de", "do", "das", "dos"];
const input = document.querySelector('[data-name="user"]');
input.addEventListener("input", (event) => {
  const arrayName = event.target.value.split(" ");
  event.target.value = arrayName
    .map((word) => {
      return dontChange.includes(word.toLowerCase())
        ? word.toLowerCase()
        : fixCase(word);
    })
    .join(" ");
  console.log(event.target.value);
});

function fixCase(word) {
  return word.length === 0
    ? ""
    : `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}
