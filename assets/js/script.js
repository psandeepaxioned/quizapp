/* Author: 

*/
const quizContent = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector(".questions");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelector("h3");
const option_a = document.querySelector(".a-text");
const option_b = document.querySelector(".b-text");
const option_c = document.querySelector(".c-text");
const option_d = document.querySelector(".d-text");
const submit = document.querySelector(".submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectOptions();

  const currentQuizContent = quizContent[currentQuiz];
  console.log(currentQuizContent.question);

  console.log(questions);
  questions.innerText = currentQuizContent.question;
  option_a.innerText = currentQuizContent.a;
  option_b.innerText = currentQuizContent.b;
  option_c.innerText = currentQuizContent.c;
  option_d.innerText = currentQuizContent.d;
}

function deselectOptions() {
  answers.forEach((item) => (item.checked = false));
}

function getSelected() {
  let answer;

  answers.forEach((item) => {
    if (item.checked) {
      answer = item.id;
    }
  });
  console.log(answer);
  return answer;
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizContent[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizContent.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h3>You answered ${score}/${quizContent.length} questions correctly</h3>
  
        <div class="submit" onclick="location.reload()">
          <a href="#FIXME" title="reload">reload</a>
        </div>
      `;
    }
  }
});
