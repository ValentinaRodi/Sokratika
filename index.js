const theme = document.querySelector(".theme__input");
const btnDelete = document.querySelector(".btn__delete");
const select = document.querySelector(".class__select");
const ulSelect = document.querySelector(".ul-select");
const liSelect = document.querySelectorAll(".li");
const classLabel = document.querySelector(".class__label");
const btnVariants = document.querySelector(".variants__btn");
const itemVariants = document.querySelectorAll(".variants__item");
const variants = document.querySelector(".variants");
const inputCounter = document.querySelector(".counter__input");
const outputCounter = document.querySelector(".counter__output");
const labelCounter = document.querySelector(".counter__label");
const textError = document.querySelector(".error__text");
const btnNext = document.querySelector(".btn__next");


//Theme button
theme.addEventListener("input", (e) => {
  const valueUser = e.target.value.length;
  valueUser > 0
    ? btnDelete.classList.remove("display_none")
    : btnDelete.classList.add("display_none");
  checkAddUserValue();
});

btnDelete.addEventListener("click", () => {
  theme.value = "";
  btnDelete.classList.add("display_none");
});

//Popup select class
let counterSelect = false;

select.addEventListener("click", () => {
  if (counterSelect === false) {
    counterSelect = true;
    classLabel.classList.add("class__label_focus");
    select.classList.add("class__select_focus");
    ulSelect.classList.remove("display_none");
  }
});

let valueSelectedUser = 4;

ulSelect.addEventListener("click", (e) => {
  const itemSelected = e.target.value;
  valueSelectedUser = itemSelected;

  select.value = itemSelected;
  liSelect.forEach((item) => {
    item.value === itemSelected
      ? item.classList.add("li_selected")
      : item.classList.remove("li_selected");
  });

  if (counterSelect === true) {
    counterSelect = false;
    classLabel.classList.remove("class__label_focus");
    select.classList.remove("class__select_focus");
    ulSelect.classList.add("display_none");
  }
});

//Variants
btnVariants.addEventListener("click", () => {
  itemVariants.forEach((item) => {
    item.classList.remove("display_none");
  });
});

let variantUser = "";

variants.addEventListener("click", (e) => {
  if (e.target.value !== undefined) {
    variantUser = e.target.value;
    checkAddUserValue();
  }

  itemVariants.forEach((item, index) => {
    if (index > 5) {
      item.classList.add("display_none");
    }
  });
});

// Counter
let valueUser = "";

inputCounter.addEventListener("input", (e) => {
  const valueUserAdd = e.target.value.length;
  outputCounter.textContent = valueUserAdd + " / 200";

  if (valueUserAdd > 200) {
    outputCounter.classList.add("error_color");
    labelCounter.classList.add("error_color");
    inputCounter.classList.add("error_border");
    textError.textContent = "Enter your name";
    btnNext.textContent = 'Создать презентацию';
    btnNext.classList.add("btn__next_active");
    btnNext.classList.remove("disabled");
  }

  if (valueUserAdd <= 200) {
    outputCounter.classList.remove("error_color");
    labelCounter.classList.remove("error_color");
    inputCounter.classList.remove("error_border");
    textError.textContent = "";
    btnNext.textContent = 'Следующий шаг';
    valueUser = e.target.value;
    checkAddUserValue();
  }
});

//Next page
function checkAddUserValue() {
  if (theme.value !== "" && variantUser !== "" && valueUser !== "") {
    btnNext.classList.add("btn__next_active");
    btnNext.classList.remove("disabled");

    console.log(theme.value);
    console.log(variantUser);
    console.log(valueUser);
    console.log(valueSelectedUser);
  } else {
    btnNext.classList.remove("btn__next_active");
    btnNext.classList.add("disabled");
  }
}
