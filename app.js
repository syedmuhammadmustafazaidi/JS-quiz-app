const quizData = [
    {
        question: "Paksitan was created by?",
        a: "Allama Iqbal",
        b: "All india Muslim League",
        c: "Imran Khan",
        d: "Quaid-Azam",
        correct: "d",
    },
    {
        question: "How many kilometers in 2000 meters?",
        a: "3",
        b: "2",
        c: "60",
        d: "200",
        correct: "b",
    },
    {
        question: "How many teeth human have?",
        a: "32",
        b: "28",
        c: "30",
        d: "33",
        correct: "a",
    },
    {
        question: "Is javascript easy?",
        a: "Difficult",
        b: "Bht Easy hai",
        c: "Easy",
        d: "Don't know",
        correct: "b",
    },
    {
        question: "Paksitan was created by?",
        a: "Allama Iqbal",
        b: "All india Muslim League",
        c: "Imran Khan",
        d: "Quaid-Azam",
        correct: "d",
    },
    {
        question: "Paksitan was created by?",
        a: "Allama Iqbal",
        b: "All india Muslim League",
        c: "Imran Khan",
        d: "Quaid-Azam",
        correct: "d",
    },
    {
        question: "Paksitan was created by?",
        a: "Allama Iqbal",
        b: "All india Muslim League",
        c: "Imran Khan",
        d: "Quaid-Azam",
        correct: "d",
    },
    {
        question: "Paksitan was created by?",
        a: "Allama Iqbal",
        b: "All india Muslim League",
        c: "Imran Khan",
        d: "Quaid-Azam",
        correct: "d",
    },
    {
        question: "Paksitan was created by?",
        a: "Allama Iqbal",
        b: "All india Muslim League",
        c: "Imran Khan",
        d: "Quaid-Azam",
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
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
 


