const form = document.querySelector(".form-group");
const fields = form.querySelectorAll(".form-control");
const username = form.querySelector(".username");
const email = form.querySelector(".email");
const password = form.querySelector(".password");
const passwordConfirm = form.querySelector(".password_confirm");
const obj = {};

// Функция генерирует DOM элемент под error
const generateError = (text) => {
  const error = document.createElement("div");
  error.className = "error";
  error.innerHTML = text;
  return error;
};

// Функция для удаления DOM элементов с error
const removeError = (e = null) => {
  if (e === null) {
    const errors = form.querySelectorAll(".error");
    for (let i = 0; i < errors.length; i++) {
      const formErrors = form.querySelectorAll(".form-error");

      errors[i].remove();

      formErrors[i].classList.remove("form-error");
      formErrors[i].classList.add("form-success");
    }
  } else {
    const label = e.target.parentNode;
    const errorElements = label.querySelectorAll(".error");
    if (errorElements.length > 0) {
      for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].remove();
      }
      e.target.classList.remove("form-error");
      e.target.classList.add("form-success");
    }
  }
};

const checkError = (item) => {
  const label = item.parentNode;
  const errorElement = label.querySelector(".error");
  if (errorElement) {
    return true;
  }
  return null;
};

const checkItemPresence = (item) => {
  if (!item.value.trim()) {
    const error = generateError("Поле не может быть пустым");
    item.parentElement.insertBefore(error, item);
    item.classList.add("form-error");
    item.classList.remove("form-success");
    return false;
  }
  return true;
};

//Функция для проверки на заполненность поля
const checkFieldsPresence = () => {
  for (let i = 0; i < fields.length; i++) {
    if (!checkItemPresence(fields[i]) && !checkError(fields[i])) {
      checkItemPresence(fields[i]);
    }
  }
};
//Функция для сравнения паролей
const checkPasswordMatch = (e = null) => {
  const error = generateError("Пароли не совпадают");
  if (!e) {
    if (passwordConfirm.value > 0) {
      if (password.value.trim() !== passwordConfirm.value.trim()) {
        passwordConfirm.parentElement.insertBefore(error, passwordConfirm);
      }
    }
  } else {
    if (
      e.target === password &&
      e.target.value.trim() !== passwordConfirm.value.trim() &&
      passwordConfirm.value.trim() > 0
    ) {
      e.target.parentElement.insertBefore(error, e.target);
    }
    if (
      e.target === passwordConfirm &&
      e.target.value.trim() !== password.value.trim() &&
      password.value.trim() > 0
    ) {
      e.target.parentElement.insertBefore(error, e.target);
    }
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
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const emailIsValid = re.test(String(email.value).toLowerCase());

    if (!emailIsValid && email.value.trim().length > 0) {
      const error = generateError("Недействительный адрес электронной почты");
      email.parentElement.insertBefore(error, email);
    }
  }
};

function onBlurFunction(e) {
  removeError(e);
  const label = e.target.parentNode;
  const errorElement = label.querySelector(".error");
  const btn = form.querySelector(".btn");
  if (
    e.target.value.trim().length === 0 &&
    errorElement === null &&
    e.target !== btn
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
  } else {
    e.target.focus();
  }
}

const checkValidForm = () => {
  const errors = form.querySelectorAll(".error");
  if (errors.length === 0) {
    return true;
  }
  return false;
};

form.addEventListener("blur", onBlurFunction, true);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  removeError();

  checkFieldsPresence();

  checkPasswordMatch();

  validateEmail();

  validateAuthLength();

  if (checkValidForm()) {
    for (let i = 0; i < fields.length; i++) {
      obj[fields[i].name] = fields[i].value;
    }
    console.log(obj);
  }
});
