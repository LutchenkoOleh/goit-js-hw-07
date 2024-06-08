const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handlerForm);

function handlerForm(event) {
  event.preventDefault();
  const emailValue = loginForm.elements.email.value.trim();
  const passwordValue = loginForm.elements.password.value.trim();

  if (!emailValue || !passwordValue) {
    alert(`All form fields must be filled in`);
    return;
  };

  const formData = new FormData(event.currentTarget);

  const data = {};

  formData.forEach((value, key) => data[key] = value);
  console.log(data);


  loginForm.reset();
};

