console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  successMessage.setAttribute("hidden", "");
}

function showSuccess() {
  successMessage.removeAttribute("hidden");
}

hideTosError();
hideSuccess();

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }

  showSuccess();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  /* alert("Form submitted"); */
  event.target.reset();
});
