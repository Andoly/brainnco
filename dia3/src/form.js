// 1
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
  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
}

// 2
const form = document.querySelector('[data-js="form"]');

const select = document.createElement("select");
select.setAttribute("multiple", "");

const colors = ["#6B7280", "#EF4444", "#10B981", "#3B82F6", "#6366F1"];
const colorsContainer = document.createElement("div");
colorsContainer.style.display = "flex";

colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  select.appendChild(option);
});

select.addEventListener("change", (event) => {
  colorsContainer.innerHTML = "";

  Array.from(event.target.selectedOptions).forEach((option) => {
    const div = createDivColor(option.value);
    colorsContainer.appendChild(div);
  });
});

function createDivColor(value) {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = value;

  return div;
}

form.appendChild(select);
form.appendChild(colorsContainer);
