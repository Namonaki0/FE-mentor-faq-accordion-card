const listItems = document.querySelectorAll(`[data-id]`);
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

listItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    arrows[i].classList.toggle("arrow-animation");
    questions[i].classList.toggle("clicked-question");
    answers[i].classList.toggle("open-answer");

    answers.forEach((answer, index) => {
      if (index !== i) {
        answer.classList.remove("open-answer");
      }
    });

    questions.forEach((question, index) => {
      if (index !== i) {
        question.classList.remove("clicked-question");
      }
    });

    arrows.forEach((arrow, index) => {
      if (index !== i) {
        arrow.classList.remove("arrow-animation");
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", checkWindowWidth);
// window.addEventListener("resize", checkWindowWidth);

// function checkWindowWidth() {
//   const mainImage = document.querySelector(".main-image");
//   if (window.innerWidth >= 1440) {
//     mainImage.src = "./images/illustration-woman-online-desktop.svg";
//   } else {
//     mainImage.src = "./images/illustration-woman-online-mobile.svg";
//   }
// }

document.addEventListener("click", (e) => {
  if (!e.target.dataset.id) {
    answers.forEach((answer, i) => {
      answer.classList.remove("open-answer");
      questions[i].classList.remove("clicked-question");
      if (arrows[i].classList.contains("arrow-animation")) {
        arrows[i].classList.remove("arrow-animation");
      }
    });
  }
});
