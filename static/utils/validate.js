window.addEventListener('DOMContentLoaded', () => {
  const errorBase = document.createElement("div");
  errorBase.className = "error";
  return errorBase;

  const form = document.querySelector(".form-group");
  const username = form.querySelector(".username");
  const email = form.querySelector(".email");
  const password = form.querySelector(".password");
  const passwordConfirm = form.querySelector(".password_confirm");
  const obj = {};

// Функция генерирует DOM элемент под error
  const generateError = (text) => {
    const error = errorBase.cloneNode(true);
    error.innerText = text;
    return error;
  };

// Функция для удаления DOM элементов с error
  const removeError = (e = null) => {
    if (e === null) {
      const errors = form.querySelectorAll(".error");
      const formErrors = form.querySelectorAll(".form-error");

      for (let i = 0; i < errors.length; i++) {
        errors[i].remove();

        formErrors[i].classList.remove("form-error");
        formErrors[i].classList.add("form-success");
      }

      return;
    }

    const label = e.target.parentNode;
    const errorElements = label.querySelectorAll(".error");
    if (errorElements.length > 0) {
      for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].remove();
      }
      e.target.classList.remove("form-error");
      e.target.classList.add("form-success");
    }
  };

  const checkError = (item) =>
      item.parentNode.querySelector(".error") && true;

  const checkItemPresence = (item) => {
    if (item.value.trim()) {
      return true;
    }
    const error = generateError("Поле не может быть пустым");
    item.parentElement.insertBefore(error, item);
    item.classList.add("form-error");
    item.classList.remove("form-success");
    return false;
  };

//Функция для проверки на заполненность поля
  const checkFieldsPresence = () => {
    for (const field of form.querySelectorAll(".form-control")) {
      checkItemPresence(field);
    }
  };
//Функция для сравнения паролей
  const checkPasswordMatch = (e = null) => {
    const error = generateError("Пароли не совпадают");
    if (!e && passwordConfirm.value.length > 0 && password.value.trim() !== passwordConfirm.value.trim()) {
      passwordConfirm.parentElement.insertBefore(error, passwordConfirm);
    } else if (
        [password, passwordConfirm].includes(e.target) &&
        password.value.trim() !== passwordConfirm.value.trim()
    ) {
      e.target.parentElement.insertBefore(error, e.target);
    }
  };

//Функция для проверки длины пароля
  const validateAuthLength = () => {
    if (password.value.length > 0 && password.value.length < 6) {
      const error = generateError("Пароль должен быть не менее 6-ти символов ");
      password.parentElement.insertBefore(error, password);
    }
  };

//Функция для проверка адреса электронной почты
  const validateEmail = (e = null) => {
    if (email) {
      const isValid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
          .test(email.value.toLowerCase());

      if (!isValid && email.value.trim().length > 0) {
        const error = generateError("Недействительный адрес электронной почты");
        email.parentElement.insertBefore(error, email);
      }
    }
  };

  const checkValidForm = () => {
    const errors = form.querySelectorAll(".error");
    if (errors.length === 0) {
      return true;
    }
    return false;
  };

  form.addEventListener("blur", (e) => {
    removeError(e);
    const label = e.target.parentNode;
    const errorElement = label.querySelector(".error");
    const btn = form.querySelector(".btn");
    if (
        e.target !== btn &&
        e.target.value.trim().length === 0 &&
        errorElement === null
    ) {
      const error = generateError("Поле не может быть пустым");
      e.target.parentElement.insertBefore(error, e.target);
      e.target.classList.add("form-error");
    }
    if (e.target === passwordConfirm || e.target === password) {
      checkPasswordMatch(e);
      validateAuthLength();
    }
    if (e.target === email) {
      validateEmail(e.target);
    }
  }, true);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    removeError();

    checkFieldsPresence();

    checkPasswordMatch();

    validateEmail();

    validateAuthLength();

    if (checkValidForm()) {
      for (const field of form.querySelectorAll(".form-control")) {
        obj[field.name] = field.value;
      }

      console.log(obj);
    }
  });
});
