// ВАЛИДАЦИЯ ФОРМЫ:

let error = document.querySelector("#errorInfo");
let fun = document.querySelector("#funInfo");
let nameInfo = document.querySelector("#hello");
let hello = document.querySelector("#formName");

let summaryError;

let patternName = /^[А-ЯЁ|A-Z][а-яё|a-z]*$/;
let patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
let patternLogin = /^[a-z0-9_-]{5,16}$/i;
let patternPassword =
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/i;
let patternPhone = /^8[0-9]{10}$/;

let errors = [];

let arrErrors = [
  "Укажите ваше имя!",
  "Имя должно начинаться с большой буквы!",
  "Укажите ваш email!",
  "Ваш адрес электронной почты введен неверно!",
  "Укажите ваш логин!",
  "Логин может содержать только буквы и цифры!",
  "Укажите ваш пароль!",
  "Пароль должен содержать не менее 8 символов, включая латинские буквы разных регитсров, символы и цифры!",
  "Пароль не введен!",
  "Пароли должны совпадать!",
  "Укажите ваш телефон!",
  "Номер телефона должен содержать 11 цифр, первая цифра 8!",
  "Пожалуйста, подтвердите согласие!",
  "Пожалуйста, выберите пол!",
];

let form = document.querySelector("form");
let data = new FormData(form);
let userInfo = [];
class Validation {
  constructor(data) {
    this.usName = data.get("name");
    this.usEmail = data.get("email");
    this.usPassword = data.get("password");
    this.usPasswordTwo = data.get("passwordTwo");
    this.usPhone = data.get("phone");
    this.usLogin = data.get("login");
    this.usCheckbox = data.get("agreement");
    this.usGender = data.get("gender");
    this.usHaveNot = data.get("have");
    userInfo = this;
    //userInfo = JSON.stringify(this);
  }

  print() {
    console.log(this);
  }

  isName() {
    if (this.usName.match(patternName)) {
    } else if (this.usName == "") {
      errors.push(arrErrors[0]);
    } else {
      errors.push(arrErrors[1]);
    }
    summaryError = errors.join(". <br>");
  }

  isEmail() {
    if (this.usEmail.match(patternEmail)) {
    } else if (this.usEmail == "") {
      errors.push(arrErrors[2]);
    } else {
      console.log(arrErrors[3]);
      errors.push(arrErrors[3]);
    }
    summaryError = errors.join(". <br>");
  }

  isLogin() {
    if (this.usLogin.match(patternLogin)) {
    } else if (this.usLogin == "") {
      errors.push(arrErrors[4]);
    } else {
      console.log(arrErrors[5]);
      errors.push(arrErrors[5]);
    }
    summaryError = errors.join(". <br>");
  }

  isPassword() {
    if (this.usPassword.match(patternPassword)) {
    } else if (this.usPassword == "") {
      errors.push(arrErrors[6]);
    } else {
      errors.push(arrErrors[7]);
    }
    summaryError = errors.join(". <br>");
  }

  isPasswordTwo() {
    if (this.usPassword == this.usPasswordTwo) {
    } else if (this.usPassword == "") {
      errors.push(arrErrors[8]);
    } else {
      console.log(arrErrors[9]);
      errors.push(arrErrors[9]);
    }
    summaryError = errors.join(". <br>");
  }

  isPhone() {
    if (this.usPhone.match(patternPhone)) {
    } else if (this.usPhone == "") {
      errors.push(arrErrors[10]);
    } else {
      console.log(arrErrors[11]);
      errors.push(arrErrors[11]);
    }
    summaryError = errors.join(". <br>");
  }

  isСheckbox() {
    if (this.usCheckbox == null) {
      errors.push(arrErrors[12]);
    }
    summaryError = errors.join(". <br>");
  }

  isSelect() {
    if (this.usGender == "unknown") {
      errors.push(arrErrors[13]);
    }
    summaryError = errors.join(". <br>");
  }

  isRadio() {
    fun.innerHTML = "";
    if (this.usHaveNot == "no") {
      fun.innerHTML += `Вы не пожалеете!<br>`;
    }
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errors = [];
  error.textContent == "";
  summaryError == "";
  fun.innerHTML == "";
  nameInfo.innerHTML == "";
  let data = new FormData(form);
  let inputs = new Validation(data);

  inputs.isName();
  inputs.isLogin();
  inputs.isEmail();
  inputs.isPassword();
  inputs.isPasswordTwo();
  inputs.isPhone();
  inputs.isСheckbox();
  inputs.isSelect();
  inputs.isRadio();

  if (errors.length == 0) {
    nameInfo.innerHTML = `${data.get("name")}, добро пожаловать на сайт!`;
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Content-Type": "applocation/x-www-form-urlencoded; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((error) => console.log(error));
  }

  error.innerHTML = summaryError;
});

//----события-меняем цвет фона------

let formColored = document.querySelector("#maincolor");
let shadeOption = document.querySelector("#shadeOption");
shadeOption.value = "";

function select() {
  formColored.classList.remove("colored1");
  formColored.classList.remove("colored2");
  formColored.classList.remove("colored3");
  switch (shadeOption.value) {
    case "green":
      formColored.classList.add("colored1");
      break;
    case "orange":
      formColored.classList.add("colored2");
      break;
    case "red":
      formColored.classList.add("colored3");
      break;
  }
}

//--- поменять фон инпута при наведении: (наверно, это можно было как-то упорядочить, но так и не смогла)

function colorMeP() {
  document.querySelector("#formPassword").style.background = "#9dae94";
}
function colorMeBackP() {
  document.querySelector("#formPassword").style.background = "white";
}

function colorMeN() {
  document.querySelector("#formName").style.background = "#9dae94";
}
function colorMeBackN() {
  document.querySelector("#formName").style.background = "white";
}

function colorMeE() {
  document.querySelector("#formEmail").style.background = "#9dae94";
}
function colorMeBackE() {
  document.querySelector("#formEmail").style.background = "white";
}

//-- выбор картинки кота---------------------

function show() {
  switch (document.querySelector("#breed").value) {
    case "oriental":
      document.querySelector("#catImage").src = "./images/cats/oriental1.jpg";
      break;
    case "maine coon":
      document.querySelector("#catImage").src = "./images/cats/maine coon.jpg";
      break;
    case "bengal":
      document.querySelector("#catImage").src = "./images/cats/bengal.jpeg";
      break;
    case "siamese":
      document.querySelector("#catImage").src = "./images/cats/siamese.jpg";
      break;
    case "british shorthair":
      document.querySelector("#catImage").src =
        "./images/cats/british shorthair.jpg";
      break;
    case "scottish":
      document.querySelector("#catImage").src = "./images/cats/scottish.png";
      break;
    case "russian blue":
      document.querySelector("#catImage").src =
        "./images/cats/russian blue.jpeg";
      break;
    case "persian":
      document.querySelector("#catImage").src = "./images/cats/persian.jpg";
      break;
    case "nobreed":
      document.querySelector("#catImage").src = "./images/cats/nobreed.jpg";
      break;
  }
}

//-----------поменять картинку по клику-верхняя-------------------------------------------------
let control = 0;
let mittImage = document.getElementById("mitt_image1");
function changeMe() {
  if (control == 0) {
    // let mittImage = document.getElementById("mitt_image1");
    mittImage.src = "./images/cats/main-photo.jpg";
    control = 1;
  } else {
    mittImage.src = "./images/cats/main-photo_2.jpg";
    control = 0;
  }
}
