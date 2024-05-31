// let trafficLight = "red";

// if (trafficLight === "green") {
//   console.log("Ketamiz");
// } else if (trafficLight === "yellow") {
//   console.log("Teyyorlang");
// } else {
//   console.log("To'xtang");
// }

// if (word === "Hello") {
//   console.log("Salom");
// } else if (word === "Bye") {
//   console.log("Xayr");
// } else if (word === "Apple") {
//   console.log("olma");
// } else if (word === "Banana") {
//   console.log("banan");
// } else {
//   console.log("Nimadir boshqa so'z yozdingiz");
// }

var ru = document.getElementById(ru);
const result = document.getElementById("result");

// let word = "Bye";
// skip
var us = document.getElementById("us");
const Form = document.getElementsByTagName("form");
console.log(Form);
const TranslateWord = (event) => {
  event.preventDefault();

  switch (us.value) {
    case "Hello":
    case "Hi":
    case "good morning":
      result.innerHTML = "Привет";
      break;
    case "Bye":
      result.innerHTML = "Пока";
      break;
    case "Apple":
      result.innerHTML = "Яблоко";
      break;
    case "Banana":
      result.innerHTML = "Банан";
      break;
    case "You":
    result.innerHTML = "Ты"
      break;
    case "Earth":
    result.innerHTML = "Земля"
      break;
    case "Sun":
    result.innerHTML = "Солнце"
      break;
    case "Mercury":
    result.innerHTML = "Меркурий"
      break;
    case "Venus":
    result.innerHTML = "Венера"
      break;
    case "Mars":
    result.innerHTML = "Марс"
      break;
    case "Jupiter":
    result.innerHTML = "Юпитер"
      break;
    case "Saturn":
    result.innerHTML = "Сатурн"
      break;
    case "Uranus":
    result.innerHTML = "Уран"
      break;
    case "Neptune":
    result.innerHTML = "Нептун"
      break;
    default:
      result.innerHTML = "Попробуйте написать что-то другое";
  }
};

Form[0].addEventListener("submit", TranslateWord);
