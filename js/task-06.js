const colorInput = document.getElementById("validation-input");

function getValid(valid, invalid) {
  valid = colorInput.value;
  invalid = Number(colorInput.dataset.length);
  if (valid.length === invalid) {
    colorInput.classList.remove("invalid");
    colorInput.classList.add("valid");
    // colorInput.addEventListener("input", getValid);
  } else {
    // function getInvalid(a, b)
    //   a = valid;
    //   b = invalid;
    colorInput.classList.remove("valid");
    colorInput.classList.add("invalid");
  }
}
colorInput.addEventListener("input", getValid);
