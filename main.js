const button = document.querySelector(".btn");
const colorHashText = document.querySelector(".colorHash");

const url = "https://x-colors.yurace.pro/api/random";

async function randomColor() {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Ошибка " + response.status);

    const randomColor = await response.json();
    document.body.style.backgroundColor =
      colorHashText.textContent =
      colorHashText.style.color =
        randomColor.hex;

    console.log();
  } catch (err) {
    console.error(err);
  }
}

button.addEventListener("click", randomColor)
