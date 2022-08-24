import beef from "./BeefStewI.jpg" ;
import potine from "./ Poutine.jpeg" ;
import mushroom from "./mushroomSoup.png" ;
import fish from "./fish.jpg" ;
import chicken from "./HawaiianChickenSkewers.webp" ;
import steak from "./steak-bites-with-sweet-potatoes.webp" ;


export default function menuPageComponent () {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.classList.add("menu");
  element.innerHTML = `
  <div class="banner">Our Menu</div>
      <ul class="mealsMenu">
        <li class="meal">
          <img src="${beef}" alt="Beef Stew picture" class="mealPic" />
          <p class="mealDescribtion">
            <span class="mealName">Beef Stew</span>
            A cozy, classic beef stew with tender beef, carrots, mushrooms +
            potatoes. Everyone will love this, especially on those chilly
            nights!
          </p>
        </li>
        <li class="meal">
          <img src="${potine}" alt="Poutine picture" class="mealPic" />
          <p class="mealDescribtion">
            <span class="mealName">Homemade Poutine</span>
            Fries covered in cheese curds and then a super savory beefy gravy so
            the curds get all melty? Yeah, poutine is the BEST.
          </p>
        </li>
        <li class="meal">
          <img
            src="${mushroom}"
            alt="Mushroom Soup picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Hungarian Mushroom Soup </span>
            Earthy mushrooms are the savory stars of this creamy, pungent,
            satisfying Hungarian mushroom soup.
          </p>
        </li>
        <li class="meal">
          <img
            src="${fish}"
            alt="Baked Cod with Lemon and Garlic picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Baked Cod with Lemon and Garlic</span>
            Best baked cod out there! Prepared Mediterranean style with a few
            spices and a mixture of lemon juice, olive oil and lots of garlic.
          </p>
        </li>
        <li class="meal">
          <img
            src="${chicken}"
            alt="Hawaiian Chicken Skewers picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Hawaiian Chicken Kabobs</span>
            Sweet and savory, these super easy pineapple-dotted Hawaiian chicken
            kabobs are pure summertime fun.
          </p>
        </li>
        <li class="meal">
          <img
            src="${steak}"
            alt="Steak Bites with Sweet Potatoes picture"
            class="mealPic"
          />
          <p class="mealDescribtion">
            <span class="mealName">Steak Bites with Sweet Potatoes</span>
            Steak bites and sweet potatoes with curry aioli for dipping- you
            heard that right! Can you think of a more delicious skillet dinner?
          </p>
        </li>
      </ul>
  `;

  return element;
};