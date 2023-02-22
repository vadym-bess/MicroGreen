"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);

  fetch(event.target.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      window.alert("Дякуємо!Данні успішно передані!");
      form.reset();
    })
    .catch((error) => {
      window.alert("Сталася помилка!Данні не були передані!");
    });
});
