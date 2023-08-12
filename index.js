const listItems = document.querySelectorAll(`[data-id]`);
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");
const main = document.querySelectorAll("main");

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

    // active font-weight on click
    questions.forEach((question, index) => {
      if (index !== i) {
        question.classList.remove("clicked-question");
      }
    });

    // arrow default to initial state
    arrows.forEach((arrow, index) => {
      if (index !== i) {
        arrow.classList.remove("arrow-animation");
      }
    });
  });
});

// KEYBOARD NAVIGATION
questions.forEach((question, i) => {
  question.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      questions[i].classList.toggle("clicked-question");
      answers[i].classList.toggle("open-answer");
      arrows[i].classList.toggle("arrow-animation");
    }
    // active font-weight on click
    questions.forEach((q, index) => {
      if (index !== i) {
        q.classList.remove("clicked-question");
      }
    });

    answers.forEach((answer, index) => {
      if (index !== i) {
        answer.classList.remove("open-answer");
      }
    });

    // arrow default to initial state
    arrows.forEach((arrow, index) => {
      if (index !== i) {
        arrow.classList.remove("arrow-animation");
      }
    });
  });
});

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
