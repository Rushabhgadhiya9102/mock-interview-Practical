// ============ question ================ //

const que = [
    {
        num:1,
        q: 'which one is used to get element by id',
        choice: ['getElementsById()', 'getElementByClassname()', 'createElement()', 'quarrySelectorAll()'],
        correct : 'getElementsById()'
    },
    {
        num:2,
        q: 'which variable data type has an block level identity',
        choice: ['var', 'let', 'const', 'class'],
        correct : 'let'
    },
    {
        num:3,
        q: 'which one is a correct options for arrow function in es6 ',
        choice: ['does not have its own this', 'shorter syntax', 'does not have its own constructor', 'All Of the Above'],
        correct : 'All Of the Above'
    },
    {
        num:4,
        q: 'what is the full form of es6',
        choice: ['EcmaScript 6', 'Embeded Script 6', 'Embeded JavaScript ', 'Evolution Script'],
        correct : 'EcmaScript 6'
    },
]


// ============ variables ===============

const question = document.getElementById('question')
const queNum = document.getElementById('queNum')
const options = document.getElementById('options')
const displaytimer = document.getElementById('timerDisplay')
const timer = document.getElementById('timer')
const nextbutton = document.getElementById('nextbtn')
const resultButton = document.getElementById('resultbtn')

let currentQuestion = 0
let score = 0
let timeLeft = 30
let timeInterval;
let temp

resultButton.style.display = 'none'

// ============ load question =============

const loadquestion = ()=>{

    clearInterval(timeInterval)
    let questionData = que[currentQuestion]
    question.textContent = questionData.q
    queNum.textContent = questionData.num
    questionData.choice.forEach((val)=>{

        let button = document.createElement('button')
        button.textContent = val
        options.appendChild(button)
        button.addEventListener('click', ()=>{
           temp = button.textContent
           console.log(temp);
           
        })
        

        if(questionData.correct == temp){
            score++
            console.log('score', score);
            questionData++
            
        }

    })
    startTimer()

}

// ============= start timer ============== //

const startTimer = ()=>{

    timeInterval = setInterval(()=>{
        timeLeft--
        timer.textContent = timeLeft

        if(timeLeft == 0){
            timeLeft=30
            nextQuestion()
    }
    
    },1000);
    
}

// ============= next question ============== //

const nextQuestion = ()=>{

    if(timeLeft == 0){
        timeLeft = 30
        currentQuestion ++
        console.log('current question ',currentQuestion);
        
    }

}

// ================= end quiz ================== //

const endQuiz = ()=>{
    if(que.length < 4){
        question.textContent = 'The Quiz is end'
        resultButton.style.display = 'block'
    }
}

// ============== next button =============== // 

nextbutton.addEventListener('click', ()=>{
    currentQuestion++
    console.log("currentQuestion:", currentQuestion);
    
})

loadquestion()