export default function orderPageComponent () {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.classList.add("order");
  element.innerHTML = `
  <div class="banner">
  We Are Happy! to Take your Order.
</div>
<form action="#">
  <div class="wrap">
    <div class="left">
      <label for="firstName">First name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        required
        placeholder="ex.Layla"
      />
      <label for="number">Phone number:</label>
      <input
        type="tel"
        name="number"
        id="number"
        required
        placeholder="ex.0123456789"
      />
    </div>
    <div class="right">
      <label for="lastName">Last name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        required
        placeholder="ex.Mohamed"
      />
      <label for="email">Your e-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="exmaple@gmail.com"
      />
    </div>
  </div>
  <label for="address">Delivery address:</label>
  <input
    type="text"
    name="address"
    id="address"
    required
    placeholder="42St at example city near example road"
  />

  <fieldset>
    <legend>Choose a preferred payment method/methods</legend>
    <label for="card">Credit Card
    <input type="checkbox" name="card" id="card" /></label>
    <label for="cash">Cash
    <input type="checkbox" name="cash" id="cash" /></label>
    <label for="ewallet">E-Wallet
    <input type="checkbox" name="ewallet" id="ewallet" /></label>
  </fieldset>
  <label for="oder">Please type in your order in details.</label>
  <textarea
    name="order"
    id="order"
    cols="30"
    rows="10"
    required
    placeholder="1 example dish with extra examples"
  ></textarea>
  <button type="submit" id="orderNow">Order Now!</button>
</form>
  `;

  return element;
};