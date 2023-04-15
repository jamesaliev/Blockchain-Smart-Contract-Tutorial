const quizData = [
  {
      question: "Match the type with the \ncorrect value and order\n\ninteger, float, boolean, char, string",
      a: "'@', true, 42, &quot;Hello World&quot;, 2.71",
      b: "42, 2.71, true, '@', &quot;Hello World&quot;",
      c: "2.71, 42, true, '@', &quot;Hello World&quot;",
      d: "2.71, 42, '@', true, &quot;Hello World&quot;",
      correct: "b",
  },
  {
      question: "What is the result of this \noperation? \n(4 * (5 - 2) % 5 - 3 * 2) \n+ (8 - 5 * 7)\n\n(Hint: Remember that BEDMAS \nstill applies even if parentheses\n are not present)",
      a: "-31",
      b: "19",
      c: "17",
      d: "-29",
      correct: "a",
  },
  {
      question: "What is the value of c at the end of\nthe if block:\n\nint c;\nint a = 12;\nint b = a + 5;\nif (a * b < (a-7) * (b + 7)) {\n\tc = 12;\n}\nelse if ((a <= b) != (b <= a)){\n\tc = 4;\n}\nelse if (a != (b * b * a - 3457)) {\n\tc = 120;\n}\nelse {\n\tc = 0;\n}",
      a: "12",
      b: "4",
      c: "120",
      d: "0",
      correct: "b",
  },
  {
    question: "How many times will this loop run? \nint a = 25; \nwhile (a >= 4) { \n\ta %= 4; \n\ta *= 8; \n\ta += 5;\n}",
    a: "1",
    b: "3",
    c: "5",
    d: "This is an infinite loop",
    correct: "d",
  },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2 style = "padding-top: 50px; padding-bottom: 0; ">You answered ${score}/${quizData.length} questions correctly</h2>
         <div style = "min-height: 200px;">
          <button style = "width: 50%; border-radius: 10px" onclick="location.reload()">Reload</button>
         </div>
         `
     }
  }
})