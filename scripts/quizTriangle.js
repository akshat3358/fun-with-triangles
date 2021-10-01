const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('.btn-check');
const outputEl = document.querySelector('#output');

const correctAnwer = ["90°","right angled"];

function calculateScores(){
    let score = 0;
    let index =0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnwer[index]){
            score+=1;  
        }
        index++;
    }
    outputEl.innerText= "Your score is "+score;
}

submitAnswerBtn.addEventListener('click',calculateScores);