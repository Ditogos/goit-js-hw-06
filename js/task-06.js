const colorInput = document.getElementById("validation-input");
const setInputData = document.querySelector('[data-length= "6"]');

colorInput.addEventListener("blur", () => {
  if (colorInput.value.length === Number(setInputData.dataset.length)) {
    colorInput.classList.add("valid");
    colorInput.classList.remove("invalid");
  } else {
    colorInput.classList.add("invalid");
    colorInput.classList.remove("valid");
  }
});
