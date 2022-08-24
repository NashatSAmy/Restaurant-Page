import "./style.css";
import homePage from "./homePage";
import menuPage from "./menuPage";
import orderPage from "./orderPage";
import logo from "./logo2.png";

const main = () => {
  document.body.setAttribute("class", "homeBody");
  document.body.innerHTML = `
  <div class="mask"></div>
    <div class="mainLogo">
      <img src="${logo}" alt="Restaurant logo" />
    </div>
    <nav>
      <button id="homePage">Home</button>
      <button id="menuPage">Our Menu</button>
      <button id="orderPage">Order NOW!</button>
    </nav>
  `;

  document.body.appendChild(homePage());
};

const changePage = (e) => {
  if (e.target.id == "homePage") {
    document.body.removeChild(document.getElementById("content"));
    document.body.appendChild(homePage());
    document.body.setAttribute("class", "homeBody");
    return;
  } else if (e.target.id == "menuPage") {
    document.body.removeChild(document.getElementById("content"));
    document.body.appendChild(menuPage());
    document.body.setAttribute("class", "menuBody");
    return;
  } else if (e.target.id == "orderPage") {
    document.body.removeChild(document.getElementById("content"));
    document.body.appendChild(orderPage());
    document.body.setAttribute("class", "orderBody");
    return;
  }
};

main();

window.addEventListener("click", changePage);
