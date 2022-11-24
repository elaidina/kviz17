const quizData = [
    {
        question: "1. zdravý jako",
        a: "jablko",
        b: "řípa",
        
        correct: "b",
    },
    {
      question: "2. hlas jako",
      a: "bubon",
      b: "zvon",
      
      correct: "b",
  },
  {
    question: "3. ostrý jako",
    a: "papír",
    b: "břitva",
    
    correct: "b",
},
{
  question: "4. mlsný jako",
  a: "kočka",
  b: "vačica",
  
  correct: "a",
},{
  question: "5. pevný jako",
  a: "paplón",
  b: "skála",
  
  correct: "b",
},
{
question: "6. kluk jak",
a: "pivo",
b: "buk",

correct: "b",
},{
  question: "7. lehký jako",
  a: "mouka",
  b: "pírko",
  
  correct: "b",
},
{
question: "8. líný jak",
a: "veš",
b: "včelka",

correct: "a",
},{
  question: "9. studený jako",
  a: "kočičí chvost",
  b: "psí čumák",
  
  correct: "b",
},
{
question: "10. chytrý jako",
a: "liška",
b: "zajíc",

correct: "a",
},{
  question: "11. čiperný jako",
  a: "veverka",
  b: "panda",
  
  correct: "a",
},
{
question: "12. chudý jako",
a: "kostelní myš",
b: "půvabná blecha",

correct: "a",
},{
  question: "13. děvče jako",
  a: "lusk",
  b: "paprika",
  
  correct: "a",
},
{
question: "14. díra jako",
a: "vrata",
b: "město",

correct: "a",
},{
  question: "15. chlap jako",
  a: "hora",
  b: "moře",
  
  correct: "a",
},
{
question: "16. jasný jako",
a: "facka",
b: "bouřka",

correct: "a",
},{
  question: "17. hluchý jako",
  a: "pařez",
  b: "rádio",
  
  correct: "a",
},
{
question: "18. usnul jako",
a: "švadlena",
b: "špalek",

correct: "b",
},{
  question: "19. maká jak ",
  a: "šroub",
  b: "sekyra",
  
  correct: "a",
},
{
question: "20. lítá jako",
a: "hard na holi",
b: "beruška",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
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
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })