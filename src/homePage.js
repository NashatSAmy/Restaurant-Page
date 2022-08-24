import logo from "./logo2.png";

export default function homePageComponent() {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.classList.add("home");
  element.innerHTML = `
  <div class="logoHolder">
    <img src="${logo}" alt="Restaurant logo" />
  </div>
  <div class="copy">
    Start eating healthy now by being one of our customers. Order now to
    enjoy the taste of a healthy life with delicious healthy food on your
    plate.
  </div>
  `;

  return element;
}
