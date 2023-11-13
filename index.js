const itemChange = document.getElementById("item-change");
const buttonChange = document.getElementById("button-change");

const colors = [
  "black",
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "white",
  "teal",
  "cyan",
  "magenta",
  "lime",
  "indigo",
  "violet",
  "olive",
  "maroon",
  "navy",
  "turquoise",
  "lavender",
  "peach",
  "salmon",
  "gold",
  "silver",
  "plum",
  "burgundy",
  "emerald",
  "sapphire",
];

buttonChange.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  itemChange.style.backgroundColor = colors[randomIndex];
  buttonChange.style.backgroundColor = colors[randomIndex];
});
