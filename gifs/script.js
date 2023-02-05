document.addEventListener("DOMContentLoaded", function (event) {
  let parentNode = document.createElement("div");
  parentNode.classList.add("form__body");

  let titleNode = document.createElement("h2");
  titleNode.classList.add("form__tilte");
  titleNode.textContent = `Добро пожаловать!`;

  let subjectNode = document.createElement("div");
  subjectNode.classList.add("form__item");

  let subjectLabelNode = document.createElement("label");
  subjectLabelNode.classList.add("form__label");
  subjectLabelNode.textContent = `На какую тему хотите гифки?`;

  let subjectInputNode = document.createElement("input");
  subjectInputNode.classList.add("form__input");

  subjectNode.append(subjectLabelNode);
  subjectNode.append(subjectInputNode);

  let amountNode = document.createElement("div");
  amountNode.classList.add("form__item");

  let amountLabelNode = document.createElement("label");
  amountLabelNode.classList.add("form__label");
  amountLabelNode.textContent = `Сколько картинок?`;

  let amountInputNode = document.createElement("input");
  amountInputNode.classList.add("form__input");

  amountNode.append(amountLabelNode);
  amountNode.append(amountInputNode);

  let buttonNode = document.createElement("button");
  buttonNode.classList.add("form__button");
  buttonNode.textContent = `Искать`;

  let resultNode = document.createElement("div");
  resultNode.classList.add("form__images");

  parentNode.append(titleNode);
  parentNode.append(subjectNode);
  parentNode.append(amountNode);
  parentNode.append(buttonNode);
  parentNode.append(resultNode);

  const frame = document.querySelector(".form");
  frame.append(parentNode);

  buttonNode.addEventListener("click", function onSearch() {
    const subjectGifs = subjectInputNode.value;

    const amountGifs = amountInputNode.value;

    resultNode.innerHTML = "";

    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=CUfnd6Li1SHEyDr1LBw0it3HLMygfB93&q=" +
        subjectGifs +
        "&limit=" +
        amountGifs +
        "&offset=0&rating=g&lang=en"
    )
      .then((response) => response.json())
      .then((gifs) => {
        console.log(gifs);
        if (gifs.data.length == 0) {
          resultNode.textContent = "Попробуйте еще раз!";
        }
        for (i = 0; i < amountGifs; i++) {
          let gif = document.createElement("img");
          gif.classList.add("form__image");
          gif.src = gifs.data[i].images.original.url;
          resultNode.append(gif);
        }
      })
      .catch((error) => console.log(error));
  });
});
