let counterValue = 0;
let value = document.querySelector("#value");
let buttonDecrement = document.querySelector('[data-action = "decrement"]');
buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
let buttonIncrement = document.querySelector('[data-action = "increment"]');
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
